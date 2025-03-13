import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Import the correct types and functions from your currencyConverter
import { regionalPrices } from "@/lib/currencyConverter";

type Currency = "USD" | "NGN" | "INR" | "AED" | "GBP" | "PKR";
type PlanType = "youtube" | "growth" | "professional" | "premium";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planType, currency, isDiscountApplied } = body;

    // Get the price based on plan type and currency
    const priceData = getPriceData(
      planType as PlanType,
      currency as Currency,
      isDiscountApplied
    );

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: getPlanName(planType as PlanType),
              description: getPlanDescription(planType as PlanType),
            },
            unit_amount: priceData.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}

// Helper functions to get plan details
function getPlanName(planType: PlanType): string {
  const planNames: Record<PlanType, string> = {
    youtube: "YouTube Growth Package",
    growth: "Growth Package",
    professional: "Professional Package",
    premium: "Premium Package",
  };
  return planNames[planType];
}

function getPlanDescription(planType: PlanType): string {
  const planDescriptions: Record<PlanType, string> = {
    youtube: "Includes 1000 Subscribers & 1000 Hours",
    growth: "For clients with more substantial needs",
    professional: "For business professionals who need significant support",
    premium: "Full month of service dedicated to one focus area",
  };
  return planDescriptions[planType];
}

function getPriceData(
  planType: PlanType,
  currency: Currency,
  isDiscountApplied: boolean
) {
  // Get the price using the exact same logic as your getPrice function
  // but return the raw number instead of the formatted string
  const price = regionalPrices[currency][planType];
  const finalPrice = isDiscountApplied ? price * 0.6 : price; // 40% discount when applied

  // Convert to cents/smallest currency unit for Stripe
  return {
    amount: Math.round(finalPrice * 100),
  };
}

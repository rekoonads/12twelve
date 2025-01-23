type Currency = "USD" | "NGN" | "INR" | "AED" | "GBP" | "PKR";

type PlanType = "youtube" | "growth" | "professional" | "premium";

const regionalPrices: Record<Currency, Record<PlanType, number>> = {
  USD: {
    youtube: 1798,
    growth: 3598,
    professional: 5398,
    premium: 8998,
  },
  NGN: {
    youtube: 775545.8,
    growth: 1552645.8,
    professional: 2329745.8,
    premium: 3883945.8,
  },
  INR: {
    youtube: 58798,
    growth: 116198,
    professional: 176398,
    premium: 292598,
  },
  AED: {
    youtube: 5546,
    growth: 11091,
    professional: 17138,
    premium: 28464,
  },
  GBP: {
    youtube: 1678,
    growth: 3358,
    professional: 5038,
    premium: 8398,
  },
  PKR: {
    youtube: 209998,
    growth: 419998,
    professional: 629998,
    premium: 1049998,
  },
};

export const currencySymbols: Record<Currency, string> = {
  USD: "$",
  NGN: "₦",
  INR: "₹",
  AED: "د.إ",
  GBP: "£",
  PKR: "₨",
};

export function getPrice(
  planType: PlanType,
  currency: Currency,
  applyDiscount = false
): string {
  const price = regionalPrices[currency][planType];
  const finalPrice = applyDiscount ? price * 0.6 : price; // 40% discount when applied

  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(finalPrice);
}

export { regionalPrices };

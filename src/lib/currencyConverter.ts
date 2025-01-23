type Currency = "USD" | "NGN" | "INR" | "AED" | "GBP" | "PKR";

const conversionRates: Record<Currency, number> = {
  USD: 1,
  NGN: 1558.92,
  INR: 86.45,
  AED: 3.67, // Estimated conversion rate
  GBP: 0.81,
  PKR: 279.89,
};

export { conversionRates };

export function convertPrice(priceUSD: number, currency: Currency): string {
  const convertedPrice = priceUSD * conversionRates[currency];
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(convertedPrice);
}

export const currencySymbols: Record<Currency, string> = {
  USD: "$",
  NGN: "₦",
  INR: "₹",
  AED: "د.إ",
  GBP: "£",
  PKR: "₨",
};

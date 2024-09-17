// pages/api/generate-coupon.ts
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Generate coupon code
    const couponCode = `DISCOUNT-${uuidv4().slice(0, 8).toUpperCase()}`;

    // Send back JSON response
    return res.status(200).json({ couponCode });
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phoneNumber || !subject || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    await prisma.message.create({
      data: {
        name,
        email,
        phoneNumber,
        subject,
        message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to submit message:", error);
    return {
      success: false,
      error: "Failed to submit message. Please try again.",
    };
  }
}

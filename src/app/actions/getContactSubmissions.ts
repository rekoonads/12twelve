"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getContactSubmissions() {
  try {
    const submissions = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return submissions;
  } catch (error) {
    console.error("Failed to fetch contact submissions:", error);
    return [];
  }
}

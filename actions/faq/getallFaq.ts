"use server";
import db from "@/lib/prisma";

export async function GetAllFaq() {
  const faq = await db.faq.findMany({
    include: { answers: true },
    orderBy: { updatedAt: "desc" },
  });
  const answeredQuestions = faq.filter((item) => item.answers.length > 0);
  const pendingQuestions = faq.filter((item) => item.answers.length === 0);
  return { answeredQuestions, pendingQuestions };
}

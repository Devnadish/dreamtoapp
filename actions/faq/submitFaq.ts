"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function submitFaq(
  question: string,
  userName: string,
  userEmail: string,
  userImage: string | undefined
) {
  const slug = question.toLowerCase().replace(/\s+/g, "-");

  const check = await db.faq.findFirst({ where: { slug: slug } });
  if (check) {
    return { error: "Question already exists" };
  }

  const res = await db.faq.create({
    data: {
      question: question,
      slug: slug,
      userName: userName,
      userEmail: userEmail,
      userImage: userImage,
    },
  });
  revalidatePath("/faq");
  return res;
}

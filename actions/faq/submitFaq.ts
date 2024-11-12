"use server"
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function submitFaq(question: string) {
    const slug = question.toLowerCase().replace(/\s+/g, '-');

    const check = await db.FAQ.findFirst({where:{slug:slug}});
    if(check){
        return {error:"Question already exists"};
    }
    
    const res = await db.FAQ.create({
        data: {
            question: question,
            slug: slug
        },
    });
    revalidatePath("/faq");
    console.log(res);
    return res;
}
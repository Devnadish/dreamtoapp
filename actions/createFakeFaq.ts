// app/page.tsx (or any other component file)
"use server"
import db from "../lib/prisma";
import { faker } from '@faker-js/faker';


  // Server action to create fake data
  export async function CreateFakeData() {
    const fakeData = [];

    for (let i = 0; i < 10; i++) {
      const question = {
        slug: faker.lorem.slug(),
        question: faker.lorem.sentence(),
        userid: faker.string.uuid(),
        viewerCount: faker.number.int({ min: 0, max: 100 }),
        isShow: true,
      };

      const createdFAQ = await db.FAQ.create({
        data: question,
      });

      
      for (let j = 0; j < 3; j++) {
        const answer = {
          faqId: createdFAQ.id,
          content: faker.lorem.paragraph(),
        };

        await db.answer.create({
          data: answer,
        });
      }

      fakeData.push(createdFAQ);
    }

    return fakeData;
  }

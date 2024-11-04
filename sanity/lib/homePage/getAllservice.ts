import { sanityFetch } from "../live";
import { defineQuery, groq } from "next-sanity";

export const getAllServices = async () => {
  const ALL_SERVICES_QUERY = defineQuery(
    `
   *[_type=="post" && references(*[_type=="department" && title == "Service"]._id)]
        `
  );

  //    const ALL_SERVICES_QUERY = defineQuery(
  //      `
  //    *[_type=="post" && references(*[_type=="department" && title == "Service"]._id)]{
  //   title,
  //   "departmentTitle": department->title, // Use a string key to avoid syntax issues
  //   "slug":slug.current,
  //   mainImage,
  //   description
  // }
  //         `
  //    );

  try {
    const post = await sanityFetch({ query: ALL_SERVICES_QUERY });
    return post.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

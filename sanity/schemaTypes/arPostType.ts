import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const arabicPostType = defineType({
  name: "arabicPost",
  title: "Arabic Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "department",
      type: "reference",
      to: { type: "department" },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "gallery",
      type: "boolean",
    }),
    defineField({
      name: "galleryPath",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      department: "department.title",
      media: "mainImage",
    },
    prepare(selection) {
      const { author, department } = selection;
      return {
        ...selection,
        subtitle: author && `by ${author} | ${department}`,
      };
    },
  },
});

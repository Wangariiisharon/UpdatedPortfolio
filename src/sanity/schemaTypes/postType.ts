import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
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
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "tech",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "technologies" } }),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
  ],
});

// {
//   : 1,
//   name: "Hazeltree Lodge B&B",
//   description:
//     "A full-featured Next.js site for a bed-and-breakfast in Ireland, offering online booking, gallery, and local attractions.",
//   tech: ["Next.js", "React", "TypeScript", "CSS"],
//   stars: 12,
//   forks: 3,
//   category: "web",
//   link: "#",
//   github: "#",
//   date: "2024-11",
// },

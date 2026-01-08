import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [
        {
          type: "object",
          name: "sizeOption",
          fields: [
            {
              name: "label",
              title: "Size",
              type: "string",
              options: {
                list: ["XS", "S", "M", "L", "XL", "XXL"],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "stock",
              title: "Stock",
              type: "number",
              validation: (Rule) => Rule.min(0).required(),
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "stock",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: subtitle === 0 ? "Out of stock" : `${subtitle} left`,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
  ],
});

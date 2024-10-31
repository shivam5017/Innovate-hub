import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Coming Soon', value: 'Coming Soon' },
          { title: 'In Development', value: 'In Development' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statusColor',
      title: 'Status Color',
      type: 'string',
      options: {
        list: [
          { title: 'Green', value: 'bg-green-500' },
          { title: 'Yellow', value: 'bg-yellow-500' },
          { title: 'Red', value: 'bg-red-500' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      validation: (rule) => rule.uri({
        allowRelative: false,
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{ type: 'image' }], // Changed to allow direct image uploads
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'text',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'feedback',
              title: 'Feedback',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
    }),
    defineField({
      name: 'futurePlans',
      title: 'Future Plans',
      type: 'text',
    }),
  ],
});

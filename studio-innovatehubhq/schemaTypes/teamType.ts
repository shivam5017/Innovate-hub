import { defineField, defineType } from 'sanity';

export const memberType = defineType({
  name: 'member',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (rule) => rule.uri({
        allowRelative: false,
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      validation: (rule) => rule.uri({
        allowRelative: false,
        scheme: ['http', 'https']
      }),
    }),
  ],
});

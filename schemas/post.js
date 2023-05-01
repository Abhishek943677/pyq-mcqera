import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exams',
  title: 'Exams',
  type: 'document',
  fields: [
    defineField({
      name: 'paper',
      title: 'paper',
      type: 'string',
    }),
    defineField({
      name: 'examname',
      title: 'examname',
      // type: 'reference',
      // to: {type: 'examname'},
      type: 'string',
      options: {
        list: [
          {value: 'ssc', title: 'ssc'},
          {value: 'drdo', title: 'drdo'},
          {value: 'uppcl', title: 'uppcl'},
          {value: 'uprvunl', title: 'uprvunl'},
        ],
      },
    }),
    defineField({
      name: 'branch',
      title: 'branch',
      type: 'string',
      options: {
        list: [
          {value: 'electrical', title: 'electrical'},
          {value: 'mechanical', title: 'mechanical'},
          {value: 'electronics', title: 'electronics'},
          {value: 'computer science', title: 'computer science'},
        ],
      },
      // type: 'reference',
      // to: {type: 'branch'},
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'paper',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'category'}],
    }),
  ],
  preview: {
    select: {
      title: 'paper',
    },
  },
})

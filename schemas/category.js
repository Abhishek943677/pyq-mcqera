import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'sahianswer',
      title: 'sahianswer',
      type: 'string',
    }),
    defineField({
      name: 'galat1',
      title: 'galat1',
      type: 'string',
    }),
    defineField({
      name: 'galat2',
      title: 'galat2',
      type: 'string',
    }),
    defineField({
      name: 'galat3',
      title: 'galat3',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'details',
      type: 'blockContent',
    }),
  ],
})

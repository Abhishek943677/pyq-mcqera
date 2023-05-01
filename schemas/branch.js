import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'branch',
  title: 'Branch',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})

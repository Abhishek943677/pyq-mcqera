import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'examname',
  title: 'Examname',
  type: 'document',
  fields: [
    defineField({
      name: 'examname',
      title: 'examname',
      type: 'string',
    }),
  ],
})

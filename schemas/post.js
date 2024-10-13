import {defineField, defineType} from 'sanity'
import { CustomAsyncSelect } from '../components/AsyncSelect';

export default defineType({
  name: 'exams',
  title: 'Exams',
  type: 'document',
  fields: [
    defineField({
      name: 'branch',
      title: 'Branch',
      type: 'string',
      options: {
        list: [],  // Initially an empty array
        url:"https://kyg93shv.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22branch%22%5D+%7B+title%7D&perspective=published",
        formatResponse: (json) => {
          console.log('Raw API Response:', json);

          // Ensure json.result is an array
          const results = Array.isArray(json.result) ? json.result : [];

          if (results.length === 0) {
            console.warn('No results found or results are not in expected format.');
          }

          // Return formatted data
          return results.map((item) => {
            if (item && typeof item.title === 'string') {
              return {
                title: item.title,
                value: item.title,
              };
            } else {
              console.warn('Unexpected item format:', item);
              return {
                title: 'Unknown Exam',
                value: 'unknown-exam',
              };
            }
          });
        },
      },
      components: {
        input: CustomAsyncSelect,  // Custom input component to handle async data
      },
    }),
    defineField({
      name: 'examname',
      title: 'Exam Name',
      type: 'string',
      options: {
        list: [],  // Initially an empty array
        url: 'https://kyg93shv.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22exam%22%5D+%7B+examname%7D&perspective=published',  // Your API URL
        formatResponse: (json) => {
          console.log('Raw API Response:', json);

          // Ensure json.result is an array
          const results = Array.isArray(json.result) ? json.result : [];

          if (results.length === 0) {
            console.warn('No results found or results are not in expected format.');
          }

          // Return formatted data
          return results.map((item) => {
            if (item && typeof item.examname === 'string') {
              return {
                title: item.examname,
                value: item.examname,
              };
            } else {
              console.warn('Unexpected item format:', item);
              return {
                title: 'Unknown Exam',
                value: 'unknown-exam',
              };
            }
          });
        },
      },
      components: {
        input: CustomAsyncSelect,  // Custom input component to handle async data
      },
    }),
    defineField({
      name: 'paper',
      title: 'Paper',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'paper',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'details',
      title: 'Details about the Exam',
      type: 'blockContent',
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
      subtitle: 'examname',
    },
  },
})

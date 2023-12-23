import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query: ({ limit = 0, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

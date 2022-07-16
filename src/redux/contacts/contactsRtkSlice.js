import { createApi } from '@reduxjs/toolkit/query/react';

import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsSplice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'contacts',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    keepUnusedDataFor: 0,
  }),
  tagTypes: ['Contact'],
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getContacts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['Contact'],
      keepUnusedDataFor: 0,
    }),
    addContact: builder.mutation({
      query: contact => {
        return { url: '/contacts', method: 'POST', data: contact };
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsSplice;

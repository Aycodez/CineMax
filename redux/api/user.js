'use client'

import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/api/register',
                method: "POST",
                body: data,
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/profile`,
              method: "PUT",
              body: data,
            }),
        }),
      
        getUsers: builder.query({
            query: () => ({
                url: "/api/users",
            }),
        }),
        
    }),
});
      
      export const {
        useRegisterMutation,
        useProfileMutation,
        useGetUsersQuery,
      } = userApiSlice;
  
import { apiSlice } from "./apiSlice";
import { MOVIE_URL, UPLOAD_URL } from "../constants";

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => `${MOVIE_URL}`,
    }),
    createMovie: builder.mutation({
      query: (newMovie) => ({
        url: `${MOVIE_URL}`,
        method: "POST",
        body: newMovie,
      }),
    }),

    updateMovie: builder.mutation({
      query: ({ id, updatedMovie }) => ({
        url: `${MOVIE_URL}/${id}`,
        method: "PUT",
        body: updatedMovie,
      }),
    }),

    addMovieReview: builder.mutation({
      query: ({ user, id, rating, comment }) => ({
        url: `${MOVIE_URL}/reviews/${id}`,
        method: "POST",
        body: { user, rating, comment },
      }),
    }),

    deleteComment: builder.mutation({
      query: ({ movieId, reviewId }) => ({
        url: `${MOVIE_URL}/reviews/${movieId}`,
        method: "DELETE",
        body: { movieId, reviewId },
      }),
    }),

    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `${MOVIE_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    getSpecificMovie: builder.query({
      query: (id) => `${MOVIE_URL}/${id}`,
    }),


    getNewMovies: builder.query({
      query: () => `${MOVIE_URL}/new`,
    }),

    getTopMovies: builder.query({
      query: () => `${MOVIE_URL}/top`,
    }),

    getRandomMovies: builder.query({
      query: () => `${MOVIE_URL}/random`,
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useCreateMovieMutation,
  useUpdateMovieMutation,
  useAddMovieReviewMutation,
  useDeleteCommentMutation,
  useGetSpecificMovieQuery,
  useDeleteMovieMutation,
  //
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} = moviesApiSlice;

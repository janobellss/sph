import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../types/people";

const BASE_URL = "https://swapi.dev/api";

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiResponse, void>({
      query: () => "/people",
    }),
    getCharacterById: builder.query<ApiResponse, string>({
      query: (id) => `/people/${id}`,
    }),
    searchCharacter: builder.query<ApiResponse, string>({
      query: (name) => `/people/?search=${name}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useSearchCharacterQuery,
} = starWarsApi;

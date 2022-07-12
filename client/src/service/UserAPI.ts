import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../types/userType";
import { API } from "../utils/contscts";

export const UserAPI = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser, {}>({
      query: () => ({
        url: `${API}/api/users`,
        mode: "no-cors",
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery } = UserAPI;

import { libraryApi } from "../lib/axios";

const ADD_BOOK_URL = "/books";

export const addBook = (requestBody: any): Promise<void> => {
  return libraryApi.post(`${ADD_BOOK_URL} `, requestBody);
};

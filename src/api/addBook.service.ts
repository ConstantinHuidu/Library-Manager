import { Book } from "../features/types";
import { libraryApi } from "../lib/axios";

const ADD_BOOK_URL = "/books";

export const addBook = (requestBody: Book): Promise<void> => {
  return libraryApi.post(`${ADD_BOOK_URL} `, requestBody);
};

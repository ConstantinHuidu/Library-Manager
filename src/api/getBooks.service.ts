import { Book } from "../features/types";
import { libraryApi } from "../lib/axios";

const GET_BOOK_URL = "/books";

export const getBooks = (): Promise<Book[]> => {
  return libraryApi.get(`${GET_BOOK_URL} `);
};

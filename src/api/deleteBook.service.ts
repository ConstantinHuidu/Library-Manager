import { Book } from "../features/types";
import { libraryApi } from "../lib/axios";

const GET_BOOK_URL = "/books";

export const deleteBook = (id: string): Promise<Book[]> => {
  return libraryApi.delete(`${GET_BOOK_URL}/${id} `);
};

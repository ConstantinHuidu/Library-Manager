import { Book } from "../features/types";
import { libraryApi } from "../lib/axios";

const GET_BOOK_URL = "/books";

export const editBook = (id: string, requestBody: Book): Promise<void> => {
  return libraryApi.put(`${GET_BOOK_URL}/${id} `, requestBody);
};

import { useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

import { BookForm } from "../../components/BookForm";

import { getBooks } from "../../api/getBooks.service";
import { editBook } from "../../api/editBook.service";
import { showToast } from "../../utils/show-toast";

import { Book } from "../types";

export const EditForm = () => {
  const { id } = useParams();
  const { mutate } = useSWRConfig();

  const { data: books = [], isLoading } = useSWR("books", getBooks);

  const book = books.find((book) => book.id?.toString() === id);

  const onFormSubmit = (book: Book) => {
    editBook(book.id as string, book).then(() => {
      showToast("success", "You have successfully updated a book");
      mutate("books");
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {books && books.length > 0 && book && (
        <BookForm
          buttonLabel="Edit  book"
          book={book}
          onFormSubmit={onFormSubmit}
        />
      )}
    </>
  );
};

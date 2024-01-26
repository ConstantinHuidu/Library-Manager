import { useSWRConfig } from "swr";

import { BookForm } from "../../components/BookForm";

import { editBook } from "../../api/editBook.service";
import { showToast } from "../../utils/show-toast";

import { Book } from "../types";

type Props = {
  book: Book;
  handleClose: () => void;
};

export const EditForm = ({ book, handleClose }: Props) => {
  const { mutate } = useSWRConfig();

  const onFormSubmit = (book: Book) => {
    editBook(book.id as string, book).then(() => {
      showToast("success", "You have successfully updated a book");
      handleClose();
      mutate("books");
    });
  };

  return (
    <>
      {book && (
        <BookForm
          buttonLabel="Edit  book"
          book={book}
          onFormSubmit={onFormSubmit}
          isModal
          handleCancel={handleClose}
        />
      )}
    </>
  );
};

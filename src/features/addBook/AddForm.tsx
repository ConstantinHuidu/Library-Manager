import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BookForm } from "../../components/BookForm";

import { addBook } from "../../api/addBook.service";
import { showToast } from "../../utils/show-toast";

import { Book } from "../types";

const emptyBook: Book = {
  title: "",
  author: "",
  genre: "",
  description: "",
};

export const AddForm = () => {
  const [addAnother, setAddAnother] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setAddAnother((current) => !current);
  };

  const onFormSubmit = (book: Book) => {
    addBook(book).then(() => {
      showToast("success", "You have successfully added a new book");
      if (!addAnother) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <BookForm
        buttonLabel="add new book"
        book={emptyBook}
        onFormSubmit={onFormSubmit}
        addAnother={addAnother}
        handleCheckbox={handleChange}
      />
    </>
  );
};

import { useFormik } from "formik";

import { BookForm } from "../../components/BookForm";

import { addBookValidation } from "./addBookValidation";
import { addBook } from "../../api/addBook.service";
import { showToast } from "../../utils/show-toast";

import { Book } from "../types";

const initialValues: Book = {
  title: "",
  author: "",
  genre: "",
  description: "",
};

export const AddForm = () => {
  const { values, handleSubmit, handleChange, resetForm, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: addBookValidation,
    onSubmit: (values) => {
      addBook(values).then(() => {
        showToast("success", "You have successfully added a new book");

        resetForm();
      });
    },
  });

  return (
    <>
      <BookForm
        buttonLabel="add new book"
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
};

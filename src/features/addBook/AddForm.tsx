import { Button } from "../../components/Button";

import { Stack, TextField } from "@mui/material";

import { useFormik } from "formik";

import { addBookValidation } from "./addBookValidation";
import { addBook } from "../../api/addBook.service";
import { showToast } from "../../utils/show-toast";

import { Book } from "../types";

const initialValues: Book = {
  title: "",
  author: "",
  description: "",
  genre: "",
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
    <Stack
      margin="0 auto"
      marginTop="36px"
      component="form"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
      width="75%"
      maxWidth="500px"
      gap="12px"
    >
      <TextField
        required
        id="title"
        name="title"
        label="Title"
        value={values.title}
        onChange={handleChange}
        error={!!errors.title}
        helperText={errors.title}
      />
      <TextField
        required
        id="author"
        name="author"
        label="Author"
        value={values.author}
        onChange={handleChange}
        error={!!errors.author}
        helperText={errors.author}
      />
      <TextField
        required
        id="genre"
        name="genre"
        label="Genre"
        value={values.genre}
        onChange={handleChange}
        error={!!errors.genre}
        helperText={errors.genre}
      />
      <TextField
        required
        multiline
        rows={4}
        id="description"
        name="description"
        label="Description"
        value={values.description}
        onChange={handleChange}
        error={!!errors.description}
        helperText={errors.description}
      />
      <Button type="submit">Add new book</Button>
    </Stack>
  );
};

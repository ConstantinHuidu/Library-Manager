import { Stack, TextField } from "@mui/material";
import { Button } from "./Button";
import { Book } from "../features/types";
import { useFormik } from "formik";
import { addBookValidation } from "../features/addBook/addBookValidation";

type Props = {
  buttonLabel: string;
  book: Book;
  onFormSubmit: (values: Book) => void;
};

export const BookForm = (props: Props) => {
  const { buttonLabel, book, onFormSubmit } = props;
  const { values, handleSubmit, handleChange, resetForm, errors } = useFormik({
    initialValues: book,
    validationSchema: addBookValidation,
    onSubmit: (values) => {
      onFormSubmit(values);
      resetForm();
    },
  });

  return (
    <>
      {values && (
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
          {Object.keys(values).map((field) => {
            if (field === "id") return null;

            if (field !== "description") {
              return (
                <TextField
                  key={field}
                  required
                  id={field}
                  name={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={values[field as keyof Book]}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
              );
            }
            return (
              <TextField
                key={field}
                required
                multiline
                rows={4}
                id={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={values[field as keyof Book]}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            );
          })}

          <Button type="submit">{buttonLabel}</Button>
        </Stack>
      )}
    </>
  );
};

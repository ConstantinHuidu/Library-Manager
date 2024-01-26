import { useFormik } from "formik";

import { Button } from "./Button";

import { addBookValidation } from "../features/addBook/addBookValidation";

import { Stack, TextField } from "@mui/material";

import { Book } from "../features/types";

type Props = {
  buttonLabel: string;
  book: Book;
  isModal?: boolean;
  onFormSubmit: (values: Book) => void;
  handleCancel?: () => void;
};

export const BookForm = (props: Props) => {
  const {
    buttonLabel,
    book,
    isModal = false,
    onFormSubmit,
    handleCancel,
  } = props;

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

          <Stack
            direction={isModal ? "row" : "column"}
            justifyContent={isModal ? "center" : "flex-start"}
            gap={isModal ? "20px" : "0"}
            marginTop="24px"
          >
            {isModal && (
              <Button
                size="large"
                onClick={() => handleCancel?.()}
                color="error"
                variant="outlined"
              >
                Cancel
              </Button>
            )}

            <Button type="submit" size="large">
              {buttonLabel}
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};

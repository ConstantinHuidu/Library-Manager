import { Stack, TextField } from "@mui/material";
import { Button } from "./Button";
import { Book } from "../features/types";
import { FormikErrors } from "formik";

type Props = {
  values: Book;
  errors: FormikErrors<Book>;
  buttonLabel: string;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (x: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BookForm = (props: Props) => {
  const { values, errors, buttonLabel, handleChange, handleSubmit } = props;
  const formFields = Object.keys(values);

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
      {formFields.map((field) => {
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
  );
};

import * as Yup from "yup";
import { Book } from "../types";

export const addBookValidation = Yup.object<Book>({
  title: Yup.string().min(1).required("Your book should have a name"),
  author: Yup.string().min(1).required("Your book should have an author"),
  genre: Yup.string().min(1).required("Your book should have a genre"),
  description: Yup.string()
    .min(1)
    .required("Please provide a short description"),
});

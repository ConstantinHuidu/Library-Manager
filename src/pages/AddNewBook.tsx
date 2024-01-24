import { Heading } from "../components/Heading";
import { AddForm } from "../features/addBook/AddForm";

const AddNewBook = () => {
  return (
    <>
      <Heading label="Add a new book" />
      <AddForm />
    </>
  );
};

export default AddNewBook;

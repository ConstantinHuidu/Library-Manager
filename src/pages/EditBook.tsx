import { useParams } from "react-router-dom";

import { Heading } from "../components/Heading";
import { EditForm } from "../features/editBook/EditForm";

const EditBook = () => {
  const { id } = useParams();
  return (
    <>
      <Heading label={`Edit book with ID ${id}`} />
      <EditForm />
    </>
  );
};

export default EditBook;
import { useParams } from "react-router-dom";
import { Heading } from "../components/Heading";

const EditBook = () => {
  const { id } = useParams();
  return (
    <>
      <Heading label={`Edit book with ID ${id}`} />
    </>
  );
};

export default EditBook;

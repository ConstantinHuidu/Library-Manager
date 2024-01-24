import { useParams } from "react-router-dom";
import { Heading } from "../components/Heading";

const ViewBook = () => {
  const { id } = useParams();
  return (
    <>
      <Heading label={`View book with ID ${id}`} />
    </>
  );
};

export default ViewBook;

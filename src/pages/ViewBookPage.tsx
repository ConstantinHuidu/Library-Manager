import { Heading } from "../components/Heading";
import { ViewBook } from "../features/viewBook/ViewBook";

const ViewBookPage = () => {
  return (
    <>
      <Heading label="View book" />
      <ViewBook />
    </>
  );
};

export default ViewBookPage;

import { Heading } from "../components/Heading";
import { BooksTable } from "../features/dashboard/BooksTable";

const BooksDahsboard = () => {
  return (
    <>
      <Heading label="Books dashboard" />
      <BooksTable />
    </>
  );
};

export default BooksDahsboard;

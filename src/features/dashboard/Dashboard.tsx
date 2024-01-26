import { useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

import { Button } from "../../components/Button";
import BooksTable from "./BooksTable";

import { getBooks } from "../../api/getBooks.service";
import { deleteBook } from "../../api/deleteBook.service";
import { showToast } from "../../utils/show-toast";

import { Stack } from "@mui/material";

export const Dashboard = () => {
  const { data: books = [], isLoading } = useSWR("books", getBooks);

  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const handleDelete = (bookId: string) => {
    deleteBook(bookId).then(() => {
      showToast("success", "Successfully deleted this book");
      mutate("books");
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Stack
      width="75%"
      margin="0 auto"
      marginTop="36px"
      gap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Button size="large" onClick={() => navigate("/add-book")}>
        Add a new book
      </Button>
      <BooksTable rows={books} onDelete={handleDelete} />
    </Stack>
  );
};

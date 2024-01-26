import { useParams } from "react-router-dom";
import useSWR from "swr";

import { getBooks } from "../../api/getBooks.service";

import { Stack, Typography } from "@mui/material";

import bookCover from "../../assets/mock-cover.jpg";

export const ViewBook = () => {
  const { id } = useParams();

  const { data: books = [], isLoading } = useSWR("books", getBooks);

  const book = books.find((book) => book.id?.toString() === id);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <Stack
      margin="0 auto"
      marginTop="36px"
      width="75%"
      maxWidth="800px"
      gap="48px"
      direction="row"
    >
      <img src={bookCover} alt="book-cover" width="50%" />
      {book && (
        <Stack justifyContent="space-between">
          <Typography variant="h4">Title: {book.title}</Typography>
          <Typography variant="h6">Author: {book.author}</Typography>
          <Typography variant="body2">Genre: {book.genre}</Typography>
          <Typography variant="caption">
            Description: {book.description}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

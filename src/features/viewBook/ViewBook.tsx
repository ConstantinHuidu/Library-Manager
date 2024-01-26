import { useParams } from "react-router-dom";
import useSWR from "swr";

import { getBooks } from "../../api/getBooks.service";

import { Avatar, Rating, Stack, Typography } from "@mui/material";

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
        <Stack justifyContent="flex-start" alignItems="center" gap="24px">
          {/* TITLE AND RATING  */}
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h4">{book.title}</Typography>

            <Stack direction="row" gap="6px">
              <Typography variant="caption">Rating:</Typography>
              <Rating size="small" value={4.4} precision={0.1} />
            </Stack>
          </Stack>

          {/* AUTHOR  */}
          <Stack direction="row" alignItems="center" gap="12px">
            <Avatar sx={{ width: 56, height: 56, bgcolor: "#C5CAE9" }} />
            <Typography variant="h6">{book.author}</Typography>
          </Stack>

          {/* GENRE  */}

          <Typography variant="body1" fontWeight="bold">
            Genre: {book.genre}
          </Typography>

          {/* DESCRIPTION / */}

          <Typography variant="caption">
            Description: {book.description}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

import { Stack } from "@mui/material";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const BooksTable = () => {
  const navigate = useNavigate();
  return (
    <Stack
      width="100%"
      marginTop="36px"
      gap="12px"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Button size="large" onClick={() => navigate("/add-book")}>
        Add a new book
      </Button>
      <p>Placeholder for table of books</p>
    </Stack>
  );
};

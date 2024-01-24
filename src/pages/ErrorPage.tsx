import { Button } from "../components/Button";

import { useNavigate } from "react-router-dom";

import { Box, Stack, Typography } from "@mui/material";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="460px"
      gap="48px"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="24px"
        sx={{ userSelect: "none" }}
      >
        <Typography variant="h1" color="#616161">
          404
        </Typography>
        <Typography variant="h5" color="#BDBDBD">
          We couldn't find this page
        </Typography>
      </Box>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        go Back
      </Button>
    </Stack>
  );
};

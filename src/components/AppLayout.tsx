import { Box, Stack } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100vw"
      height="100vh"
    >
      <Header />

      <Stack width="100%" boxSizing="border-box">
        <Outlet />
      </Stack>
    </Box>
  );
};

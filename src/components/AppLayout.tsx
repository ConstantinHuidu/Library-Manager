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

      <Stack
        boxSizing="border-box"
        width="100%"
        justifyContent="center"
        alignItems="center"
        marginTop="48px"
        paddingX="24px"
      >
        <Outlet />
      </Stack>
    </Box>
  );
};

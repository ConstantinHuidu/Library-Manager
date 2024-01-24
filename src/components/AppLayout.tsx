import { Box, Stack } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100vw"
      height="100vh"
    >
      <Header />
      <main style={{ overflow: "auto" }}>
        <Stack>
          <Outlet />
        </Stack>
      </main>
    </Box>
  );
};

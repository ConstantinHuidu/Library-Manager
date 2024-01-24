import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "./Button";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      textAlign="left"
      padding="20px 40px"
      width="100%"
      height="80px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Typography variant="h4" sx={{ cursor: "pointer" }}>
        Library manager
      </Typography>
      <Button variant="outlined">
        <ArrowBackIcon />
      </Button>
    </Box>
  );
};

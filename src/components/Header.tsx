import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      textAlign="left"
      padding="20px 40px"
      boxSizing="border-box"
      width="100%"
      height="80px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Typography variant="h4" sx={{ cursor: "pointer" }}>
        Library manager
      </Typography>
      <Button
        variant="text"
        color="inherit"
        title="Back to previous"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
      </Button>
    </Box>
  );
};

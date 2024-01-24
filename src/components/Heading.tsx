import { Typography } from "@mui/material";

type Props = {
  label: string;
};

export const Heading = ({ label }: Props) => {
  return (
    <Typography variant="h4" color="#8B4513">
      {label}
    </Typography>
  );
};

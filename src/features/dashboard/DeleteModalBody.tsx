import { Button } from "../../components/Button";

import { Stack, Typography } from "@mui/material";

type Props = {
  handleClose: () => void;
  handleConfirm: () => void;
};

export const DeleteModalBody = (props: Props) => {
  const { handleClose, handleConfirm } = props;
  return (
    <Stack gap="20px" paddingTop="20px">
      <Typography>Are you sure you want to delete this book?</Typography>
      <Stack direction="row" width="100" justifyContent="center" gap="20px">
        <Button
          size="large"
          color="error"
          variant="outlined"
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
        <Button size="large" onClick={() => handleConfirm()}>
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
};

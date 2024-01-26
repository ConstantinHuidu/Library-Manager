import { ReactNode, MouseEvent } from "react";

import { Box, Divider, Modal, Typography } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  minWidth: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  title: string;
  body: ReactNode;
  handleClose: () => void;
};

export const GenericModal = (props: Props) => {
  const { open, title, body, handleClose } = props;

  const handleModalClose = (_e: MouseEvent<HTMLElement>, reason: string) => {
    if (reason && reason === "backdropClick") return;
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {title}
        </Typography>
        <Divider />
        {body}
      </Box>
    </Modal>
  );
};

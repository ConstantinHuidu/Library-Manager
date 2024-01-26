import { useState } from "react";

import { IconButton, Menu, MenuItem, MenuList } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  handleClickEdit: () => void;
  handleClickView: () => void;
  handleClickDelete: () => void;
};

export const ContextMenu = (props: Props) => {
  const { handleClickEdit, handleClickView, handleClickDelete } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClickEdit();
    handleClose();
  };
  const handleView = () => {
    handleClickView();
    handleClose();
  };
  const handleDelete = () => {
    handleClickDelete();
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList dense>
          <MenuItem
            onClick={() => handleEdit()}
            sx={{ display: "flex", gap: "9px" }}
          >
            <EditIcon fontSize="small" /> <span>Update book</span>
          </MenuItem>

          <MenuItem
            onClick={() => handleView()}
            sx={{ display: "flex", gap: "9px" }}
          >
            <VisibilityIcon fontSize="small" /> <span>View book</span>
          </MenuItem>

          <MenuItem
            onClick={() => handleDelete()}
            sx={{ display: "flex", gap: "9px", color: "red" }}
          >
            <DeleteForeverIcon fontSize="small" color="error" />{" "}
            <span>Delete book</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

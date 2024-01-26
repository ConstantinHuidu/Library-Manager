import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Box, IconButton, Stack } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";

import { Book } from "../types";
import { useNavigate } from "react-router-dom";

type Props = {
  rows: Book[];
  onDelete: (bookId: string) => void;
};

export default function GenericTable({ rows, onDelete }: Props) {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "author",
      flex: 1,
      headerName: "Author",
    },
    {
      field: "genre",
      headerName: "Genre",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      sortable: false,
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        const {
          row: { id },
        } = params;

        return (
          <Stack direction="row">
            <IconButton size="small" onClick={() => navigate(`/edit/${id}`)}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => navigate(`/view/${id}`)}>
              <PreviewIcon />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(id)}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Stack>
        );
      },
      flex: 0.6,
    },
  ];
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ContextMenu } from "./ContextMenu";
import { GenericModal } from "../../components/GenericModal";
import { DeleteModalBody } from "./DeleteModalBody";

import { Box } from "@mui/material";

import { Book } from "../types";

type Props = {
  rows: Book[];
  onDelete: (bookId: string) => void;
};

export default function BooksTable({ rows, onDelete }: Props) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const navigate = useNavigate();
  const {
    open: openDeleteModal,
    handleCloseModal: handleCloseDeleteModal,
    handleOpenModal: handleOpenDeleteModal,
  } = useModal();

  const handleOpenModal = (book: Book) => {
    setSelectedBook(book);
    handleOpenDeleteModal();
  };

  const onDeleteConfirm = (book: Book) => {
    onDelete(book.id as string);
    handleCloseDeleteModal();
    setSelectedBook(null);
  };

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
          <ContextMenu
            handleClickView={() => navigate(`/view/${id}`)}
            handleClickEdit={() => navigate(`/edit/${id}`)}
            handleClickDelete={() => handleOpenModal(params.row)}
          />
        );
      },
      flex: 0.4,
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
      <GenericModal
        open={openDeleteModal}
        title="Delete Book"
        handleClose={handleCloseDeleteModal}
        handleConfirm={() => {}}
        body={
          <DeleteModalBody
            handleClose={handleCloseDeleteModal}
            handleConfirm={() => onDeleteConfirm(selectedBook as Book)}
          />
        }
      />
    </Box>
  );
}

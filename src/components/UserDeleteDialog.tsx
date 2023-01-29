import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { deleteUser } from "../features/dashboard/usersSlice";

interface IProps {
  isOpen: boolean;
  name: string;
  id: number;
}

export const UserDeleteDialog: FC<IProps> = ({ isOpen, name, id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(id));
    handleClose();
  };

  return (
    <Dialog open={isOpen && isDialogOpen} onClose={handleClose}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>{`Are you sure you want to delete user ${name}?`}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

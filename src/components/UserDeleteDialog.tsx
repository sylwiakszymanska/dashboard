import React, { FC } from "react";
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
  setIsOpen: (arg: boolean) => void;
  name: string;
  id: number;
}

export const UserDeleteDialog: FC<IProps> = ({
  isOpen,
  setIsOpen,
  name,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(id));
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
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

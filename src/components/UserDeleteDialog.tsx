import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { FC, useState } from "react";

interface IProps {
  isOpen: boolean;
  user: string;
}
export const UserDeleteDialog: FC<IProps> = ({ isOpen, user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog
      // selectedValue={selectedValue}
      open={isOpen && isDialogOpen}
      onClose={handleClose}
    >
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>{`Are you sure you want to delete user ${user}?`}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={handleClose}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

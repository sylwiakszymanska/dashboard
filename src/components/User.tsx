import { TableRow, TableCell, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "../features/dashboard/usersSlice";
import { UserDeleteDialog } from "./UserDeleteDialog";

interface IProps {
  user: IUser;
}
export const User: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = () => {
    navigate(`edit-user/${user.id}`);
  };

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.address?.city}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Button variant="contained" color="warning" onClick={handleEdit}>
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          Delete
        </Button>
        <UserDeleteDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          name={user.name}
          id={user.id}
        />
      </TableCell>
    </TableRow>
  );
};

import { TableRow, TableCell, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { IUser, selectUsers } from "../features/dashboard/usersSlice";

interface IProps {
  user: IUser;
}
export const User: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`edit-user/${user.id}`);
  };

  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.address.city}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Button variant="contained" color="warning" onClick={handleEdit}>
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

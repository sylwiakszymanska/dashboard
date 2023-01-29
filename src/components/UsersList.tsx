import React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

import { useAppSelector } from "../app/hooks";
import { selectUsers } from "../features/dashboard/usersSlice";
import { User } from "./User";

export function UsersList() {
  const { usersList } = useAppSelector(selectUsers);

  return usersList.length === 0 ? (
    <Typography>There are no users available</Typography>
  ) : (
    <TableContainer>
      <Table sx={{ minWidTableHead: 750 }} size={"medium"}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Usernme</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

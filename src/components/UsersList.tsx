import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
} from "@mui/material";
import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectUsers } from "../features/dashboard/usersSlice";
import { User } from "./User";

export function UsersList() {
  const { usersList } = useAppSelector(selectUsers);

  return (
    <TableContainer>
      <Table
        sx={{ minWidTableHead: 750 }}
        aria-labelledby="tableTitle"
        size={"medium"}
      >
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
        {usersList.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Table>
    </TableContainer>
  );
}

import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  TableSortLabel,
} from "@mui/material";

import { useAppSelector } from "../app/hooks";
import { IUser, selectUsers } from "../features/dashboard/usersSlice";
import { User } from "./User";

type Order = "asc" | "desc";

const sortByNames = (a: IUser, b: IUser, order: Order) => {
  const firstUsername = a.username ?? "";
  const secondUsername = b.username ?? "";
  const currentOrder = order === "asc" ? 1 : -1;
  if (firstUsername < secondUsername) {
    return -1 * currentOrder;
  }
  if (firstUsername > secondUsername) {
    return 1 * currentOrder;
  }
  return 0;
};

export function UsersList() {
  const { usersList } = useAppSelector(selectUsers);
  const [order, setOrder] = useState<Order>("asc");
  const [sortedUsers, setSortedUsers] = useState<IUser[]>([]);

  const handleSort = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };
  useEffect(() => {
    if (usersList.length > 0) {
      const arrayForSort = [...usersList];
      const newSortedUsers = arrayForSort.sort((a, b) =>
        sortByNames(a, b, order)
      );
      setSortedUsers(newSortedUsers);
    }
  }, [usersList, order]);

  return usersList.length === 0 ? (
    <Typography>There are no users available</Typography>
  ) : (
    <TableContainer>
      <Table sx={{ minWidTableHead: 750 }} size={"medium"}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>
              <TableSortLabel
                active={true}
                direction={order}
                onClick={handleSort}
              >
                Usernme
              </TableSortLabel>
            </TableCell>
            <TableCell>City</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

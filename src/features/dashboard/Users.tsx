import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsers, selectUsers } from "./usersSlice";
import { UsersList } from "../../components/UsersList";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Users() {
  const dispatch = useAppDispatch();
  const { usersList } = useAppSelector(selectUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usersList.length) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddNew = () => {
    navigate("/add-new-user");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 45px 10px 10px",
        }}
      >
        <Typography variant="h4">User list</Typography>
        <Button variant="contained" onClick={handleAddNew}>
          Add new
        </Button>
      </Box>
      <UsersList />
    </Box>
  );
}

import {
  TextField,
  Paper,
  Stack,
  Typography,
  Box,
  Button,
  FormLabel,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { IUser, selectUsers } from "../features/dashboard/usersSlice";

interface IProps {
  user: IUser;
}
export const UserForm: FC = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Form</Typography>
      <Box>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <TextField name="" />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          {/* <InputLabel>Email</InputLabel> */}
          <TextField name="" label="Email" />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

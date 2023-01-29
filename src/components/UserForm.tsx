import { TextField, Stack, Typography, Box, Button } from "@mui/material";
import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addUser, selectById } from "../features/dashboard/usersSlice";

export const UserForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialFormData = { name: "", email: "" };
  const { id } = useParams();
  const userData = useAppSelector((state) => selectById(state, Number(id)));

  const { control, handleSubmit } = useForm({
    defaultValues: id ? userData : initialFormData,
    mode: "onChange",
  });

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmitButton = handleSubmit((values) => {
    dispatch(addUser({ ...values, id: Date.now() }));
    navigate("/");
  });

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Form</Typography>
      <Box sx={{ padding: "0 30%" }}>
        <Stack
          spacing={2}
          sx={{ alignItems: "stretch", paddingBottom: "20px" }}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({
              field: { name, value, onChange, ref },
              fieldState: { error },
            }) => (
              <TextField
                name={name}
                value={value}
                onChange={onChange}
                inputRef={ref}
                label="Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" },
            }}
            render={({
              field: { name, value, onChange, ref },
              fieldState: { error },
            }) => (
              <TextField
                name={name}
                value={value}
                onChange={onChange}
                inputRef={ref}
                label="Email"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmitButton}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

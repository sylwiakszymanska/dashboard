import React from "react";
import { Users } from "./features/dashboard/Users";
import { Routes, Route, Outlet } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import { UserForm } from "./components/UserForm";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: ({ palette }) => palette.grey[200],
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Dashboard
      </Typography>
      <Paper sx={{ padding: "50px 20px", margin: "30px 30px" }}>
        <Outlet />
      </Paper>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Users />} />
        <Route path="/add-new-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
      </Route>
    </Routes>
  );
}

export default App;

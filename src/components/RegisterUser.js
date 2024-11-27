import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const RegisterUser = () => (
  <Container maxWidth="sm">
    <Box
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Register User
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField label="Address" fullWidth margin="normal" required />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </Box>
  </Container>
);

export default RegisterUser;

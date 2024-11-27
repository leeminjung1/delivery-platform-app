import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";

const LoginUser = () => {
  return (
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
          Log In
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Log In
          </Button>
        </Box>
        <Typography sx={{ mt: 2 }} variant="body2">
          Don't have an account? <Link href="/user/register">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginUser;
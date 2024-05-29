import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const Login = ({ onClose }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming the API endpoint expects an "id" and "password"
      // const response = await axios.post("http://localhost:5000/api/auth/login", { id, password });
      // setSnackbarMessage("Login successful");
      // setSnackbarSeverity("success");
      // setOpenSnackBar(true);
      setTimeout(() => {
        if (onClose) onClose(); // Close the modal after successful login
        navigate("/dashboard"); // Redirect to dashboard
      }, 1500);
    } catch (error) {
      setSnackbarMessage(error.response?.data?.message || "Login failed");
      setSnackbarSeverity("error");
      setOpenSnackBar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackBar(false);
  };

  return (
    <React.Fragment>
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="id"
              name="id"
              label="ID"
              fullWidth
              autoComplete="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0 text-gray-900">Don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Login;

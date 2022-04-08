import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = (event) => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match. Please try again.');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        event.preventDefault();
    }



    return (
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 10 }} item xs={12} md={12}>
                        <Typography sx={{ fontWeight: '400' }} variant="h3" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                type="text"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                type="email"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                size="small"
                            />

                            <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</Button>
                        </form>}
                        {isLoading && <CircularProgress />}
                        <br />
                        {user.email && <Alert severity="success">
                            <AlertTitle>Congratulations!</AlertTitle>
                            <strong>You are now registered!</strong>
                        </Alert>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{authError}</strong>
                        </Alert>}
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Register;
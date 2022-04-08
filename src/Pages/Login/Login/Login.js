import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (event) => {
        loginUser(loginData.email, loginData.password, location, history);
        event.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 10 }} item xs={12} md={12}>
                        <Typography sx={{ fontWeight: '400' }} variant="h3" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                type="email"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="outlined-size-small"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                size="small"
                            />

                            <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            <br />
                            {isLoading && <CircularProgress />}
                            <br />
                            {user.email && <Alert severity="success">
                                <AlertTitle>Congratulations!</AlertTitle>
                                <strong>You are logged in!</strong>
                            </Alert>}
                            {authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <strong>{authError}</strong>
                            </Alert>}
                        </form>
                        <p>---------------------------------------------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Sign in with Google</Button>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Login;
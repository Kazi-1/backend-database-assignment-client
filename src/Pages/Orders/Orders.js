import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import MyOrder from '../../Pages/MyOrder/MyOrder';
import { Box } from '@mui/system';

const Orders = () => {
    const { user } = useAuth();
    const email = user.email
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `services.json/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email])

    return (
       
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{fontWeight: 600, my: 8, color: 'text.secondary'}} variant="h4" component="div">
                MY ORDERS: {orders.length}
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
                orders?.map(order => <MyOrder 
                    key={order._id}
                    order={order}
                ></MyOrder>)
            }
           </Grid>
            </Container>
        </Box>
    )

};

export default Orders;
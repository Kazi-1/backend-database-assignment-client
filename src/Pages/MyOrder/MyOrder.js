import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = (props) => {
    const { name, description, img, _id,} = props.order;

    const handleDelete = (id) => {
        fetch(`services.json/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(id);
    }

    return (
        <Grid item xs={4} sm={4} md={4} sx={{ mb: 3 }}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 500, my: 4 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
                <button onClick={()=> handleDelete(_id)} className="btn btn-danger mb-5">Delete</button>
            </Card>
        </Grid>
    );
};

export default MyOrder;
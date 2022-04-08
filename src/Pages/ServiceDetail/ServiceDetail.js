import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Grid } from '@mui/material';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { detailId } = useParams();
    const { user } = useAuth();
    // const {user} = useFirebase();
    const [services, setServices] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.name = services?.name;
        data.img = services?.img;
        data.price = services?.price;
        data.status = "pending";
        fetch("services.json", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // console.log(data);
    }

    useEffect(() => {
        fetch(`services.json/${detailId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container>
            <h1>{services.length}</h1>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Card sx={{ width: 300 }}>
                        <CardMedia
                            component="img"
                            sx={{width: "100%"}}
                            image={services.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ fontWeight: 500, my: 4 }} variant="h5" component="div">
                                {services.name}
                            </Typography>
                            <Typography variant="body2" color='text.secondary'>
                                {services.description}
                            </Typography>
                            <Typography variant="h5" color='primary.main'>
                                Price: {services.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                     <input {...register("name", { required: false })} defaultValue={user?.displayName} />
                    <input {...register("email", { required: false })} defaultValue={user?.email} />
                        <input {...register("address", { required: false })} defaultValue="Address" />
                        <input {...register("postCode", { required: false })} defaultValue="Post Code" />
                        <input {...register("city", { required: false })} defaultValue="City" />
                        <input {...register("houseNumber", { required: false })} defaultValue="House Number" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" value="Place Order" className="btn btn-warning fw-bolder text-white" />
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
};

export default ServiceDetails;




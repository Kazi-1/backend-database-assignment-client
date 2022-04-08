import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    console.log(orders);
    // Handling Delete
    const handleDelete = (id) => {
        fetch(`https://shocking-alien-12154.herokuapp.com/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(id);
    }

    // Handling Status
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }

    useEffect(() => {
        fetch('services.json/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleUpdate = (id) => {
        fetch(`https://shocking-alien-12154.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status })
        });
    }

    return (
        <div>
            <h1 className="text-primary">Manage Orders</h1>
            <h3 className="text-secondary mb-5">Total Orders: {orders.length}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Product Id</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((product) => (
                            <TableRow
                                key={product.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">{product._id}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">
                                    <input onChange={handleStatus} type="text" defaultValue={product.status} />
                                </TableCell>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger mt-3">Delete</button>
                                <button onClick={() => handleUpdate(product._id)} className="btn btn-info mt-3">Update</button>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;
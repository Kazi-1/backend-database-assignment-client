import React from 'react';
import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div style={{ backgroundColor: 'orange' }} >
            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-light fs-5 fw-bold">
                        <span className="logo-img">
                            {/* <img src="https://images-na.ssl-images-amazon.com/images/I/413P-5tN33L.png" alt="" /> */}
                        </span>
                        <p className="d-inline ms-4">Tour Planner</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white fs-5 fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white fs-5 fw-bold">Services</Nav.Link>

                        <Nav.Link as={HashLink} to="/blog" className="text-white fs-5 fw-bold">Blog</Nav.Link>
                        {user?.email ?
                            <>
                                <ButtonGroup className="more-btn" variant='light'>
                                    <DropdownButton variant='light' className="text-white" title="More" id="bg-nested-dropdown">
                                        <NavLink to={`/orders/${user.email}`} style={{textDecoration: "none", color: "black", marginLeft: "20px"}}>My Orders</NavLink>
                                        <br />
                                        <NavLink to={`/manageOrders/${user.email}`} style={{textDecoration: "none", color: "black", marginLeft: "20px"}}>Manage Orders</NavLink>
                                        <br />
                                        <NavLink to={`/addService/${user.email}`} style={{textDecoration: "none", color: "black", marginLeft: "20px"}}>Add Service</NavLink>
                                
                                        
                                        <Dropdown.Item onClick={logOut} variant='light' className="text-dark fs-5 fw-bold border border-0 bg-light">Logout</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </>
                            : <Nav.Link as={Link} to="/login" className="text-white fs-5 fw-bold">Login</Nav.Link>}
                        <Navbar.Text className='ms-3'>
                            <span className="text-white fs-5 fw-bold">Signed in as:</span> <a

                                className="text-white fs-5 fw-bold signed-in-user" href="#login">{user?.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h1 style={{ color: '#F86600' }} className="fw-bold my-5">OUR SERVICES</h1>
            {services.length === 0 ?
                <Spinner animation="border" variant="danger" />
                : <div className="service-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>}
        </div>
    );
};

export default Services;
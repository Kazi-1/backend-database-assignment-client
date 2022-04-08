import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 style={{ color: '#F86600' }} className="fw-bold my-5">Visit Our Blog</h1>
            <div className="d-flex">
                <div className="margin-top">
                    <h3>Would like more? <br />
                    No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of!</h3>
                    <Link to="./blog"><button className="btn btn-warning">To the blog</button></Link>
                </div>
                <div>
                    <img src="https://www.lieferando.de/assets/images/blog.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;
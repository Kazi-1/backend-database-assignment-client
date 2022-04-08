import React from 'react';
import Blog from '../../Blog/Blog';
import SocialMedia from '../../SocialMedia/SocialMedia';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Home;
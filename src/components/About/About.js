import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import "./About.css"
const About = () => {
    return (
        <div>
           <Banner></Banner>
           <h1 className="text-info">About Page</h1>
           <Footer></Footer>
        </div>
    );
};

export default About;
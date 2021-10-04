import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './ContactPage.css'
const ContactPage = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-info">Contact page </h1>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;
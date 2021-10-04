import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './ContactPage.css'
const ContactPage = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-info">Contact page </h1>
            <p>email:tipusultancse1011@gmail.com</p>
            <p>number: 01705768175</p>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;
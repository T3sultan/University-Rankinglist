import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './News.css'
const News = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-info">News Page</h1>
            <Footer></Footer>
        </div>
    );
};

export default News;
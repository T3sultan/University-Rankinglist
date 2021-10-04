import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './News.css'
const News = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>(1) Universities with two or more central webdomains:</h1>
            <p>
                This is a BAD PRACTICE that does not only penalize the rank of the universities, but it also significantly decreases their visibility in search engines and, far more important, their global internet impact.
                We suggest that if a university is going to change its webdomain then the older one should be immediately and completely discarded.
                IMPORTANT INFO: For the benefit of the institution, our policy is to rank all the domains but to publish only the best ranked domain, even if the selected one is the older or the no longer main webdomain. Any alternative domain should be discontinued AS SOON AS POSSIBLE (no redir, please)
            </p>
            <h1>(3) Sub-units with independent web domain</h1>
            <p>
                BAD PRACTICE: Surprisingly, there are faculties, schools or even departments that maintain a web domain totally different to the university central one. This is a problem linked to the governance of the university but it is also provoking a relevant decrease of the web visibility for both the satellite and the whole university.
                Same applies to the campuses with their own webdomain as there is no reason for not sharing the central webdomain even if they are in a different locality.
            </p>
            <Footer></Footer>
        </div>
    );
};

export default News;
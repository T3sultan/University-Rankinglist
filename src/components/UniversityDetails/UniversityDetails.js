import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './UniversityDetails.css'

const UniversityDetails = () => {
    // console.log(ranking)
    const [universityDetails, setUniversityDetails] = useState([]);
    const [individualUniversity, setIndividualUniversity] = useState({});
    const { ranking } = useParams(); //use params from react-router dom
    
 //dataload
    useEffect(() => {
        fetch('/topUniversityListDetails.json')
            .then(res => res.json())
            .then(data => setUniversityDetails(data.university))

    }, []);
    //match the data
    useEffect(() => {
        const findUniversity = universityDetails.find(university => university.ranking === ranking);
        setIndividualUniversity(findUniversity)


    }, [universityDetails]) //dependences

    return (
        <div>
        {/* banner */}
            <Banner></Banner> 
            <Card.Title className="universityName">{individualUniversity?.univeristy}</Card.Title>
        
                <div className="text-center mt-4 mb-4 details">
                    <Card style={{ width: '28rem', alignItems: 'center' }}>
                        <Card.Img variant="top" className="w-50" src={individualUniversity?.picture?.thumbnail} />
                        <Card.Body>
                            <Card.Title>{individualUniversity?.Other_name}</Card.Title>
                            <Card.Text>
                                {individualUniversity?.Motto}
                            </Card.Text>
                            <Card.Title>Type: {individualUniversity?.Type}</Card.Title>
                            <Card.Title>Established: {individualUniversity?.Established}</Card.Title>
                            <Card.Title>Affiliation: {individualUniversity?.Affiliation}</Card.Title>
                            <Card.Title>Chancellor: {individualUniversity?.Chancellor}</Card.Title>
                            <Card.Title>Vice Chancellor: {individualUniversity?.Vice_Chancellor}</Card.Title>
                            <Card.Title>Students: {individualUniversity?.Students}</Card.Title>
                            <Card.Title>Undergraduates: {individualUniversity?.Undergraduates}</Card.Title>
                            <Card.Title>Postgraduates: {individualUniversity?.Postgraduates}</Card.Title>
                            <Card.Title>Website: {individualUniversity?.Website}</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
       
 
            {/* footer */}
            <Footer></Footer>

        </div>

    );
};

export default UniversityDetails;
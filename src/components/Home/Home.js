import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    //state 
    const [univesities, setUniversities] = useState([]);
    const [matchUniversitys, setMatchUniversity] = useState([]);

    //input change receive handler
    const handleSearchUniversity = event => {
        const searchValue = event.target.value.toLowerCase();
        const matchUniversity = univesities.filter(university => university.university.toLowerCase().includes(searchValue))
        setMatchUniversity(matchUniversity);


    }

    //data load

    useEffect(() => {

        fetch('/topUniversityList.json')
            .then(res => res.json())
            .then(data => {
                setUniversities(data)
                setMatchUniversity(data)
            });
    }, []);

    return (
        <div className="all-university">
            {/* banner */}
            <Banner></Banner>

            <h1 className="top">LIST OF ALL TOP UNIVERSITY BANGLADESH</h1>
            {/* form */}
            <Form style={{ width: '100%',borderColor:"black" }} className="d-flex my-3">
                <FormControl
                    type="search"
                    placeholder="search university"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearchUniversity}
                />

            </Form>
            {/* table */}
            <Table responsive="sm" className="my-5 bg-info">
                <thead>
                    <tr>
                        <th>BD Ranking</th>
                        <th>World Rank</th>

                        <th>University Name</th>
                        <th>Impact Rank</th>
                        <th>Openniess Rank</th>
                        <th>Excellence Rank</th>
                        <th>Yearly Buget</th>
                        <th>University Image</th>

                        <th>University Details</th>



                    </tr>
                </thead>
                <tbody>

                    {
                        matchUniversitys.map(univeristy => ( //loop
                            <tr className="table-list">
                                <td className="table-list">{univeristy?.ranking}</td>

                                <td className="style">{univeristy?.world_rank}</td>

                                <td className="style">{univeristy?.university}</td>
                                <td className="style">{univeristy?.impact_rank}</td>
                                <td className="style">{univeristy?.Openness_rank}</td>
                                <td className="style">{univeristy?.excellence_rank}</td>
                                <td className="style">{univeristy?.yearly_buget}</td>
                                <th><img className="rounded-circle w-25" src={univeristy?.image} alt="" /> </th>
                                <td className="style">
                                    <NavLink
                                        to={`/home/${univeristy?.ranking}`}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>


            <Footer></Footer>
        </div>
    );
};

export default Home;
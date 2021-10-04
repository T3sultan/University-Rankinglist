import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css';




const Home = () => {
    const [univesities, setUniversities] = useState([]);
    useEffect(() => {

        fetch('/topUniversityList.json')
            .then(res => res.json())
            .then(data => setUniversities(data));
    });
    //input change receive handler
    // const handleSearch = event => {
    //     const searchValue = event.target.value.toLowerCase();
    //     const matchEployee = univesities.filter(employee => employee.name.toLowerCase().includes(searchValue))
    //     setUniversities(matchEployee)

    // }
    return (
        <div className="all-university">
            <Banner></Banner>
           
                <h1 className="top">LIST OF ALL TOP UNIVERSITY BANGLADESH</h1>
                <Form style={{ width: '100%',  }} className="d-flex my-3">
                    <FormControl
                        type="search"
                        placeholder="search university"
                        className="me-2"
                        aria-label="Search"
                     //onChange={handleSearch}
                    />

                </Form>
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
                            univesities.map(univeristy => (
                                <tr className="table-list">
                                    <td className="table-list">{univeristy?.ranking}</td>

                                    <td>{univeristy?.world_rank}</td>

                                    <td>{univeristy?.university}</td>
                                    <td>{univeristy?.impact_rank}</td>
                                    <td>{univeristy?.Openness_rank}</td>
                                    <td>{univeristy?.excellence_rank}</td>
                                    <td>{univeristy?.yearly_buget}</td>
                                    <th><img className="rounded-circle w-25" src={univeristy?.image} alt="" /> </th>
                                    <td>
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
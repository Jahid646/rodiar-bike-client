import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bike from '../Home/Bike/Bike';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/bikes")
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <>
        <Header></Header>
    
        <div className="text-center mt-5 pt-5">
          
          <h2>Our All Bikes  </h2>
         
        </div>
        
        <Container>
          <Row xs={12} md={4} className="g-5 mt-2" >
            {bikes.map((bike) => (
              <Bike key={bike._id} bike={bike}></Bike>
            ))}
          </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default AllBikes;
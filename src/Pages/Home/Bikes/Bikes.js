import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/bikes")
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <>
    
        <div className="text-center mt-5 pt-5">
          
          <h2>Our Popular Bikes </h2>
         
        </div>
        <Container>
          <Row xs={12} md={4} className="g-5 mt-2" >
            {bikes.slice(0, 6).map((bike) => (
              <Bike key={bike._id} bike={bike}></Bike>
            ))}
          </Row>
        </Container>
        </>
    );
};

export default Bikes;
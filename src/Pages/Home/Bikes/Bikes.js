import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
      fetch("https://salty-retreat-73850.herokuapp.com/bikes")
        .then((res) => res.json())
        .then((data) => setBikes(data));
    }, []);
    return (
        <>
    <Container>
        <div className="text-center mt-5 pt-5">
          
          <h2>Our Popular <span className="text-danger">Bikes</span>  </h2>
         
        </div>
        
          <Row xs={12} md={4} className="g-4 mt-2" >
            {bikes.slice(0, 6).map((bike) => (
              <Bike key={bike._id} bike={bike}></Bike>
            ))}
          </Row>

          <div className="my-2 dflex">
             <NavLink to="/all-bikes">
        <Button variant="danger">Explore More</Button>
        </NavLink>
          </div>

         
     <hr/>
        </Container>

       
        </>
    );
};

export default Bikes;
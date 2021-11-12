import React from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddBike.css'
const AddBike = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    axios.post('http://localhost:5000/bikes', data)
            .then( res =>{ 
         if(res.data.insertedId){
             alert('Added Successfully')
             reset();
         }
    });

     
    }
    return (
        <Container>
        <Row>
            <Col md={12}>
            <div className="add-bike">
        <h2 className="orange" >Add New Bike</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name") } placeholder="name" /> <br/>
  <textarea {...register("description" ) }placeholder="description" /> <br/>
  <input type="number" {...register("price" )} placeholder="price" /> <br/>
  <input {...register("img" )} placeholder="img url" /> <br/>
  <input type="submit" className="btn btn-outline-danger" value="Add Bike" />
</form>
    </div>
            </Col>
        </Row>
    </Container>
    );
};

export default AddBike;
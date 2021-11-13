import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth'
const PostReview = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const { user } = useAuth();



      const onSubmit = (data) => {
       
        data.uid = user.uid;
        fetch("https://salty-retreat-73850.herokuapp.com/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("Add Review Successfully");
              reset();
            }
          });
    
        console.log(data);
      };


    return (
        <Container>
            <Row>
            <Col md={6}>
          <div className="mt-2">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
             
              <br />
              
        
              <input className="m-2"
                placeholder="Your Review"
                defaultValue=""
                {...register("review")}
              />
              
              <br />
              <input className="m-2"
                placeholder="Rating 1-5"
                defaultValue=""
                {...register("rating")}
              />{" "}
              <br />
              <input className="btn btn-outline-danger orange m-2" type="submit" value="Post Review" />
            </form>
          </div>
          </Col>
            </Row>
        </Container>
    );
};

export default PostReview;
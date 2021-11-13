import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    const {_id} = reviews;
    useEffect(() => {
      fetch("https://salty-retreat-73850.herokuapp.com/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, [reviews]);




    return (
        <div>
            
        <div className="text-center mt-5 pt-5">
          
          <h2>What Our <span className="text-danger">Customer's Say!</span>  </h2>
         
        </div>


        <Container>
          <Row xs={12} md={4} className="g-5 mt-2" >
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Row>
        </Container>
        </div>
    );
};

export default UserReviews;
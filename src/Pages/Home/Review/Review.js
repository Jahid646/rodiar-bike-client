import { Rating } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';



const Review = (props) => {

  const {  name, rating, review } = props.review;
    return (
        <div>
            <Col xl={4} lg={4} md={6} sm={12}>
      <Card id="cardStyle" style={{ width: "18rem" }} className="h-100 mx-auto border shadow-sm p-2">
        <Card.Img variant="top" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>"{review}"</Card.Text>
          <Rating name="read-only" value={parseInt(rating)} readOnly />
        </Card.Body>
        <div className="mx-auto pb-2">
         
        </div>
      </Card>
    </Col>
        </div>
    );
};

export default Review;
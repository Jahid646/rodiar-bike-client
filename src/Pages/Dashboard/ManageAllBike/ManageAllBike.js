import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import Bike from "../../Home/Bike/Bike";

const ManageAllBike = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const handleDelete = (id) => {
    const process = window.confirm("Do You Want to Delete this Product?");
    if (process) {
      const url = `http://localhost:5000/bikes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully!");
              const remaining = bikes.filter((bike) => bike._id !== id);
              setBikes(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center mt-5 pt-5">
        <h2>Our All Bikes </h2>
      </div>

      <Container>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>Bike Name</th>
              <th>Price $</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike._id}>
                <td>{bike.name}</td>

                <td>{bike.price}</td>
                <td>{bike.description}</td>
                <td>
                  <Button
                    className="btn-danger"
                    onClick={() => handleDelete(bike._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {/* <td>{singlebike.bike?.name}</td>
             */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageAllBike;


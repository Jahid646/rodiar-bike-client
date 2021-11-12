
import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";


const ManageAllOrders = () => {
  const [bikes, setBikes] = useState([]);
  const [singleBike, setSingleBike] = useState([]);

  const { _id } = bikes;

  useEffect(() => {
    fetch("http://localhost:5000/all-orders")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, [bikes]);

  useEffect(() => {
    fetch(`http://localhost:5000/single-order/${_id}`)
      .then((res) => res.json())
      .then((data) => setSingleBike(data));
  }, []);

  const handleApproved = (_id) => {
    const newStatus = "Shipped";
    const newBike = { ...singleBike };
    newBike.status = newStatus;
    setSingleBike(newBike);

    fetch(`http://localhost:5000/order-status/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBike),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  
  const handleDelete = (id) => {
    const process = window.confirm("Do You Want to Cancel this Order?");
    if(process){

      const url = `http://localhost:5000/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Order Cancelled!");
          const remaining = singleBike.filter((bike) => bike._id !== id);
          setSingleBike(remaining);
        }
      });
    }
    
  };

  return (
      <div> <Container>


        <h2 className="orange text-center">Manage Order</h2>
      {
        <div>
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Bike Name</th>
                <th>Order By</th>
                <th>User Email</th>
                <th>User Id</th>
                <th>Price $</th>
                <th>Order Status</th>
                <th>Order Approve</th>
                <th>Order Cancel</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((user) => (
                <tr key={user.uid} >
                  <td>{user.bike?.name}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.uid}</td>
                  <td>{user.bike?.price}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button className="btn-success" onClick={() => handleApproved(user._id)}>
                      Approved
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-danger" onClick={() => handleDelete(user._id)}>
                      Cancel Order
                    </Button>
                  </td>
                </tr>
              ))}
              {/* <td>{singlebike.bike?.name}</td>
               */}
            </tbody>
          </Table>
        </div>
      }
    </Container>
    </div>
    
   
  );
};

export default ManageAllOrders;
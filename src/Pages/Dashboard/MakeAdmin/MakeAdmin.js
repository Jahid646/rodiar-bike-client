import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
   

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user ={email}
        fetch('https://salty-retreat-73850.herokuapp.com/make-admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>
            {
                if(data.modifiedCount){
                    console.log(data)  
                    setEmail('');
                    setSuccess(true);
                }
              
            });


        


        e.preventDefault();
    }
    return (
        <div>
           <h2>Make Admin</h2>
           <form onSubmit={handleAdminSubmit}>
            <TextField variant="standard"
             label="Enter Email"
             type="email"
             onBlur={handleOnBlur}
              />

              <Button type="submit" variant="outline-danger">Make Admin</Button>
              {success && <Alert severity="success">Made Admin successfully!</Alert>}

           </form>
        </div>
    );
};

export default MakeAdmin;
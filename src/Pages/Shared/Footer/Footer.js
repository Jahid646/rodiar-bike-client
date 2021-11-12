import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../../images/logo.png'
const Footer = () => {
  return (
   
    <Box sx={{backgroundColor: "#FFFAFA" }}>
 <Box
        style={{ marginTop: 50, paddingTop: 50 }}
      >
        <Grid item xs={12} sm={12} md={4} sx={{textAlign:'center'}}>
           <img style={{marginTop: 50, paddingTop: 50, paddingBottom:50, height: '50' }}  src={logo} alt="" />
        </Grid>
         
        <Grid container spacing={{ xs: 2 }}>
          <Grid  item xs={12} sm={12} md={4}>
            <Box sx={{ p: 2, mr:3, textAlign: 'center' }}>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Our Blog</Typography>
              <Typography variant="h6">Get Helps</Typography>
              <Typography variant="h6">Read FAQs</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ p: 2, mr:3, textAlign: 'center' }}>
              <Typography variant="h6">Subscribe for regular update.</Typography>
            <TextField label="Enter Your Email" variant="filled" />
            <Button sx={{ color: "red", p: 2, px:9 }} variant="outlined">
              Subscribe
            </Button>
            </Box>
            
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ p: 2, mr:3, textAlign: 'center' }}>
            <Typography variant="h6">Connect Us On</Typography>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large"/>
            <TwitterIcon fontSize="large" />
            </Box>
          </Grid>
        </Grid>
        
      </Box>
      <hr/>
        <p style={{textAlign: 'center'}}>&copy; copyright 2021 All right reserved </p>
    </Box>
     
   
  );
};

export default Footer;

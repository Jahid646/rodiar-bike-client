import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import UserReviews from '../UserReviews/UserReviews';
import WhyBest from '../WhyBest/WhyBest';

const Home = () => {
    return (
        <Box>
            <Header></Header>
            <Banner></Banner>
            <Bikes></Bikes>
            <UserReviews></UserReviews>
            <WhyBest></WhyBest>
            <Footer></Footer>
            
        </Box>
    );
};

export default Home;
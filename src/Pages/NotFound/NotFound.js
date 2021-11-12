import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <div >
            <Header></Header>
            <div className="d-flex justify-content-center">
                <img  src="https://thumbs.dreamstime.com/b/error-page-layout-vector-design-error-page-layout-vector-design-website-page-creative-concept-page-you-requested-could-not-be-140091313.jpg" alt="" />
            </div>
            
            <Footer></Footer>
        </div>
        
    );
};

export default NotFound;
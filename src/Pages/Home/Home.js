import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Introduction from './Introduction';
import Products from './Products';
import Reviews from './Reviews';
import UpcomingProduct from './UpcomingProduct';
import ConnectUs from './ConnectUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Products></Products> */}
            <Introduction></Introduction>
            <UpcomingProduct></UpcomingProduct>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ConnectUs></ConnectUs>
        </div>
    );
};

export default Home;
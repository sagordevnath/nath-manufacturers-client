import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Introduction from './Introduction';
import MakeStat from './MakeStat';
import Products from './Products';
import Reviews from './Reviews';
import UpcomingProduct from './UpcomingProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <MakeStat></MakeStat>
            <Products></Products>
            <UpcomingProduct></UpcomingProduct>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
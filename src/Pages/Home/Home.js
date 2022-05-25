import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Introduction from './Introduction';
import MakeStat from './MakeStat';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MakeStat></MakeStat>
            <Introduction></Introduction>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
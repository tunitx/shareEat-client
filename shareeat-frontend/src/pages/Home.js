import React from 'react';
import Header from '../components/Navbar';
import DonorListForm from '../components/DonorList';

const Home = () => {
    return (
        <div>
          <Header/>
          <DonorListForm/>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from '../components/Navbar';
import DonorListForm from '../components/DonorList';
import NgoList from '../components/NgoList';
import SignUp from '../components/SignUp';
import Banner from '../components/Hero';
import JoinUs from '../components/Joinus';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
          <Header/>
          <Banner/>
          <Footer/>
        </div>
    );
};

export default Home;
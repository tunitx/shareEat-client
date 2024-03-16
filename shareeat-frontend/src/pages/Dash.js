import React from 'react';
import Header from '../components/Navbar';
import DonorListForm from '../components/DonorList';
import NgoList from '../components/NgoList';
import SignUp from '../components/SignUp';
import Banner from '../components/Hero';
import JoinUs from '../components/Joinus';
import Footer from '../components/Footer';
import ListingsOfDonor from '../components/ListingsOfDonor';
import DonorTable from '../components/ListingRequests';
import Dashboard from '../components/Dashboard';


const Dash = () => {
    return (
        <div>
          
          <Header/>
          <Dashboard/>
          {/* <DonorTable/> */}
          <Footer/>
        </div>
    );
};

export default Dash;


import { Link } from "react-router-dom";


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const divStyle = {
    borderRadius: "12px",
    background: "linear-gradient(90deg, #D13D70 2.82%, #D13D70 100%)",
    boxShadow: "0px 0px 13px 0px rgba(227, 79, 130, 0.50)",
};

const Header = () => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [logout , setlogout] = useState(true);
    // const [showSignUp, setShowSignUp] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav className="w-full border-b shadow gradient-bg-footer">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            {/*<h2 className="text-2xl font-bold text-white">Collectica</h2>*/}
                            <span className="px-2 py-1 font-bold text-3xl italic text-white">
                                ShareEat
                            </span>
                            {/*<span className="py-1 font-semibold italic text-white">Auction-NFT</span>*/}
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ml-30 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/">Home</Link>
                            </li>{" "}
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/collections">Dashboard</Link>
                            </li>


                        </ul>
                        <div className="mt-3 space-y-2 lg:hidden md:hidden">
                        </div>


                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className=" flex flex-row justify-start">

                        <button
                            // to="javascript:void(0)
                            onClick={() => { }}
                            className="text-white w-full text-sm p-2 bg-[#e32970] hover:bg-[#bd255f] rounded-sm flex flex-row justify-center items-center shadow-md shadow-gray-700 mr-2"
                        >
                            List Food
                        </button>
                    </div>
                    <div className=" flex flex-row ">

                        {!localStorage.getItem('token') && (
                            <>
                                <button className="text-white text-sm p-2 rounded-sm border mr-2" onClick={() => navigate('/signup')}>
                                    SignUp
                                </button>
                                <button className="text-white text-sm p-2 rounded-sm border " onClick={() => {
                                    navigate('/signin')
                                }}>
                                    Sign In
                                </button>


                            </>
                        )}
                        {logout && localStorage.getItem('token') && (
                            <>
                             <button className="text-white text-sm p-2 rounded-sm border " onClick={() => {
                            localStorage.removeItem('token');
                            setlogout(false);
                            Swal.fire(
                                'Success!',
                                'You have signed out successfully.',
                                'success'
                            );
                        }}>
                            Sign out
                        </button>
                            </>
                        )}
                       
                    </div>

                </div>

                <div className="hidden space-x-3 md:inline-block">

                </div>
            </div>
        </nav>
    );
};
export default Header;

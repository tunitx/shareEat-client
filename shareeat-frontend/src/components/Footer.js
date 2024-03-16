// import timelessLogo from '../assets/timeless.png'

import { Link } from "react-router-dom"

function Footer() {
    // const navigate = useNavigate()
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer h-100 ">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.25] justify-center items-center">
                    <Link to="/" className="text-white">
                        <span className="px-2 py-1 font-bold text-xl italic">ShareEat</span>
                        {/*<span className="py-1 font-semibold italic">Auction-NFT</span>*/}
                    </Link>
                </div>

                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <Link to="/donor-listing">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            List food
                        </p>
                    </Link>
                    <Link to="/donor-registration">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            Donor
                        </p> 
                    </Link>
                    <Link to="/ngo-registration">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            NGO
                        </p>
                    </Link>

                    {!localStorage.getItem('token') && (
                        <>

                        <Link to="/signin ">
                        <p className="text-white text-base text-center mx-2 cursor-pointer">
                            Sign In
                        </p>
                    </Link>
                    <Link to="/signup ">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        Sign Up
                    </p>
                </Link>
                </>

                    )}
                    
                </div>

                <div className="flex flex-row justify-center items-center">
               
                    <p className="text-white text-right text-xs relative w-full relative right-24">
                        &copy;2024 All rights reserved
                    </p>

                    <p className="text-white text-right text-xs relative w-240 text-center ">
                        Made with ❤️ by DevChef
                    </p>
                    
                </div>
            </div>
        </div>
    )



}

export default Footer
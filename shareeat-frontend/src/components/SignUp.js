import React, {useState} from 'react';
import axios from 'axios';
import Header from './Navbar';
import Footer from './Footer';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/signup', { email, password });
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
<Header/>
        <form className="space-y-6 min-h-screen bg-white" onSubmit={handleSubmit}>

       
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex justify-center items-center ">
                <span className="px-2 py-1 font-bold text-3xl italic text-custom-color text-center"> ShareEat</span>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                {/* <span className="px-2 py-1 font-bold text-3xl italic text-white text-center"> ShareEat</span> */}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-custom-color">Sign Up</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6  text-custom-color">Name</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="name" autoComplete="name" required 
                              value={name}
                              onChange={e => setName(e.target.value)}
                              className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6  text-custom-color mt-2">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required 
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6  text-custom-color mt-2">Password</label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-white hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={password}
                        onChange={e => setPassword(e.target.value)} autoComplete="current-password" required className="grow border w-full rounded border-[#ca403b] py-2 px-3 text-sm sm:text-base   text-custom-color focus:outline-[#EF4D48] placeholder:font-Poppins placeholder:text-sm mt-2 mb-2" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6">Sign in</button>
                    </div>
                

                {/* <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p> */}
            </div>
        </div>
        </form>
        <Footer/>
        </>
    );
};

export default SignUp;
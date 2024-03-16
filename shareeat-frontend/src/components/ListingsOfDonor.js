import { useState } from 'react';
// import './App.css';

function ListingsOfDonor() {
    const [formData, setFormData] = useState({
        location: "",
        foodType: "",
        diabetic: "",
        listingTime: "",
        shelfLife: "",
    })

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (

        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 flex flex-col items-center">
            <form onSubmit={submitHandler} className="mx-auto  max-w-xl ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-custom-color mb-8 whitespace-nowrap">Please list your Eatables</h1>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div>
                        <label for="name" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <br></br>


                    <div>
                        <label for="diabetic" className="block text-sm font-semibold leading-6 text-gray-900">Safe for Diabetic person?</label>
                        <div className="mt-2.5">
                            <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="diabetic" id="diabetic" value={formData.diabetic} onChange={changeHandler}>
                                <option value="">Select...</option>
                                <option value="veg">Yes</option>
                                <option value="nonVeg">No</option>
                            </select>
                        </div>
                    </div>
                <br></br>
                <div>
                        <label for="foodType" className="block text-sm font-semibold leading-6 text-gray-900">Food Type</label>
                        <div className="mt-2.5">
                            <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="foodType" id="foodType" value={formData.foodType} onChange={changeHandler}>
                                <option value="">Select...</option>
                                <option value="veg">Veg</option>
                                <option value="nonVeg">Non Veg</option>
                            </select>
                        </div>
                    </div>
                
          

<br></br>
                    
                   
                    <br></br>
                    <div>
                        <label for="listingTime" className="block text-sm font-semibold leading-6 text-gray-900">Listing Time</label>
                        <div className="mt-2.5">
                            <input
                                type="time"
                                name="listingTime"
                                id="listingTime"
                                value={formData.listingTime}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <label for="shelfLife" className="block text-sm font-semibold leading-6 text-gray-900">Shelf Life</label>
                        <div className="mt-2.5">
                            <input
                                type="time"
                                name="shelfLife"
                                id="shelfLife"
                                value={formData.shelfLife}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="bg-blue-600 text-white rounded-sm py-2 w-full block">Save</button>
                </div>
            </form>
        </div>
    );
}

export default ListingsOfDonor;
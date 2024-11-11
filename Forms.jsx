import { useState } from "react";

function Form() {
    const [userInput, setUserInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        gender: "",
    });

    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
        console.log('user input: ', userInput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.password === userInput.confirmPassword) {
            alert("Registration Successful!");
        } else {
            alert("Passwords do not match");
        }
    };

    return (

        <div className ="w-full h-full bg-cover bg-center m-0 p-0"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg')" }}>
  
        <div className="max-w-lg mx-auto bg-white p-8 border shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <input 
                    type="text"
                    name="fname"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="First Name"
                    value={userInput.fname}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="lname"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Last Name"
                    value={userInput.lname}
                    onChange={handleChange}
                />

                <input 
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Email"
                    value={userInput.email}
                    onChange={handleChange}
                />

                <input 
                    type="tel"
                    name="phone"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Phone Number"
                    value={userInput.phone}
                    onChange={handleChange}
                />

                <input 
                    type="password"
                    name="password"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Password"
                    value={userInput.password}
                    onChange={handleChange}
                />

                <input 
                    type="password"
                    name="confirmPassword"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Confirm Password"
                    value={userInput.confirmPassword}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="address"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="Address"
                    value={userInput.address}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="city"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="City"
                    value={userInput.city}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="state"
                    className="w-full border border-gray-300 shadow-md p-2 rounded-md"
                    placeholder="State"
                    value={userInput.state}
                    onChange={handleChange}
                />

                <div className="w-full border border-gray-300 shadow-md p-2 rounded-md">
                    <label className="text-gray-700">Gender:</label>
                    <select
                        name="gender"
                        className="w-full mt-2 p-2 rounded-md"
                        value={userInput.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-green-700 text-white p-2 rounded-md mt-4 hover:bg-green-600"
                >
                    Register
                </button>
            </form>

            <div className="mt-6">
                <h3 className="text-center text-gray-600 font-semibold">Preview:</h3>
                <p className="text-center text-gray-700">Name: {userInput.fname} {userInput.lname}</p>
                <p className="text-center text-gray-700">Email: {userInput.email}</p>
                <p className="text-center text-gray-700">Phone: {userInput.phone}</p>
                <p className="text-center text-gray-700">Address: {userInput.address}, {userInput.city}, {userInput.state}</p>
                <p className="text-center text-gray-700">Gender: {userInput.gender}</p>
            </div>
        </div>
        </div>
    );
}


export default Form; 

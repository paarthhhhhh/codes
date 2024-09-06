import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { BASE_URL } from '../../service';
import { toast } from 'react-toastify';

const Registration = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    password: '',
    address: '',
    aadharCardNumber: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async () => {
    let responseData;
    await fetch(`${BASE_URL}/api/v1/users/signup`, {
      method: 'POST',
      headers: {
        Accepts: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      toast.success('Registration Successful');
      console.log(responseData);
      storeTokenInLS(responseData.token);
      navigate('/login');
    } else {
      toast.error(responseData.errors);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <header className="container mx-auto px-4 py-6">
      </header>
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="name"
                value={formData.name}
                onChange={changeHandler}
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                placeholder="Password"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="age"
                value={formData.age}
                onChange={changeHandler}
                type="text"
                placeholder="Age"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="address"
                value={formData.address}
                onChange={changeHandler}
                type="text"
                placeholder="Address"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="aadharCardNumber"
                value={formData.aadharCardNumber}
                onChange={changeHandler}
                type="text"
                placeholder="Aadhar Number"
                required
              />
              <input
                className="form-control bg-[#0F1629] border-[#1E293B] text-white p-2 rounded"
                name="mobile"
                value={formData.mobile}
                onChange={changeHandler}
                type="text"
                placeholder="Contact Number"
                required
              />
            </div>
            <button
              className="w-full bg-[#E879F9] hover:bg-[#F0ABFC] text-black py-2 rounded"
              onClick={register}
            >
              Register
            </button>
          </div>
          <p className="mt-6 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-[#E879F9] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Registration;
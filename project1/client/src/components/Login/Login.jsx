import React, { useState } from 'react';
import { Link, useNavigate  , NavLink} from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { BASE_URL } from '../../service';
import { toast } from 'react-toastify';
import { useVote } from '../../store/vote'


const Login = () => {
  const { isLoggedIn } = useAuth()
  const { hasVoted } = useVote()
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    aadharCardNumber: '',
    role: 'voter',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;
    await fetch(`${BASE_URL}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      toast.success('Login successful');
      storeTokenInLS(responseData.token);
      navigate(formData.role === 'admin' ? '/admin' : '/voter');
    } else {
      toast.error('Login failed, please check your credentials.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020817] text-white">
      <header className="container mx-auto px-4 py-6">

      </header>
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login to Your Account</h1>
          <div className="space-y-6">
            <input
              className="bg-[#1A1E24] border-[#2A2F38] text-white p-2 rounded w-full"
              name="aadharCardNumber"
              value={formData.aadharCardNumber}
              onChange={changeHandler}
              type="text"
              placeholder="Aadhar Number"
              required
            />
            <input
              className="bg-[#1A1E24] border-[#2A2F38] text-white p-2 rounded w-full"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              required
            />
            <select
              value={formData.role}
              onChange={changeHandler}
              className="bg-[#1A1E24] border-[#2A2F38] text-white p-2 rounded w-full"
              name="role"
            >
              <option value="voter">Voter</option>
              <option value="admin">Admin</option>
            </select>
            <button
              className="w-full bg-[#4DB8FF] hover:bg-[#3994D9] text-black py-2 rounded"
              onClick={login}
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#4DB8FF] hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; 2023 VotePulse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;

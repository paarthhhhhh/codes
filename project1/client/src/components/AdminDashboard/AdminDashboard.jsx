import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import candidate from '../../assets/user.jpg'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../service'
import Navbar from '../Navbar/Navbar'

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([])
  const [token, setToken] = useState('')

  const fetchInfo = async () => {
    await fetch(`${BASE_URL}/api/v1/candidate/candidates`)
      .then((res) => res.json()).then((data) => setCandidates(data))
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken);
    }
  }, [])

  useEffect(() => {
    fetchInfo();
  }, [])

  const removeCandidate = async (candidateId) => {
    let res;
    await fetch(`${BASE_URL}/api/v1/candidate/${candidateId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },

    })
    .then((res) =>res.json()).then((data)=>res = data)
    console.log(res)
    await fetchInfo();
    
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col lg:flex-row">
      <div className="flex-none w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:mr-6">
        <img src={candidate} alt="Candidate" className="w-full h-48 object-cover rounded-lg mb-4" />
        <Link to="/addcandidate">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Add New
          </button>
        </Link>
      </div>
      
      <div className="flex-grow bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Candidates</h1>
        <div className="grid grid-cols-4 gap-4 text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
          <p className="text-left">Name</p>
          <p className="text-left">Age</p>
          <p className="text-left">Party</p>
          <p className="text-left">Actions</p>
        </div>
        <div className="space-y-4">
          {candidates.map((candidate, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b">
              <p className="text-gray-800">{candidate.name}</p>
              <p className="text-gray-800">{candidate.age}</p>
              <p className="text-gray-800">{candidate.party}</p>
              <button 
                onClick={() => removeCandidate(candidate._id)} 
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default AdminDashboard
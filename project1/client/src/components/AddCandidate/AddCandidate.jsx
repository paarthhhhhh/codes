import React, { useEffect, useState } from 'react'
import './AddCandidate.css'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../service'
import { toast } from 'react-toastify'

const AddCandidate = () => {
      const navigate = useNavigate()
      const [token, setToken] = useState('')
      const [formData, setFormData] = useState({
            name: "",
            age: "",
            party: ""
      })
const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
}

useEffect(() => {
      const storedToken = localStorage.getItem('token')
      if (storedToken) {
        setToken(storedToken);
      }
}, [])

const addCandidate = async () => {
      let responseData;
      await fetch(`${BASE_URL}/api/v1/candidate`, {
            method: "POST",
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
      }).then((res) => res.json()).then((data) => responseData = data)
      console.log(responseData)
      if (responseData.success) {
            toast.success(' Candidate added successfully')
            console.log(responseData)
            navigate('/admin')
      } else {
            toast.success(responseData.errors)
      }
}


      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
              <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add Candidate</h2>
                <form className="space-y-4" onSubmit={e=>e.preventDefault()}>
                  <div>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                      type="text"
                      placeholder="Candidate Name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      name="age"
                      value={formData.age}
                      onChange={changeHandler}
                      type="text"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      name="party"
                      value={formData.party}
                      onChange={changeHandler}
                      type="text"
                      placeholder="Party"
                    />
                  </div>
                  <div>
                    <button
                      className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                      onClick={addCandidate}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
          
}

export default AddCandidate
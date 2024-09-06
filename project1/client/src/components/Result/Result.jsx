import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../service'
import './Result.css'

const Result = () => {
      const [candidates, setCandidates] = useState([])

      const fetchInfo = async () => {
            await fetch(`${BASE_URL}/api/v1/candidate/candidates`)
                  .then((res) => res.json()).then((data) => setCandidates(data))
      }


      useEffect(() => {
            fetchInfo();
      }, [])

      return (
            <div className="flex items-center justify-center h-screen bg-[#020817] p-4">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-serif text-center mb-4">Election Result</h1>
              <div className="grid grid-cols-3 gap-4 text-lg font-semibold text-gray-700 border-b pb-2">
                <p>Name</p>
                <p>Party</p>
                <p>Votes</p>
              </div>
              <div className="mt-4 overflow-y-auto max-h-80 text-xl">
                {candidates.map((candidate, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-2  text-gray-600 border-b">
                    <p>{candidate.name}</p>
                    <p>{candidate.party}</p>
                    <p>{candidate.voteCount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      )

      
}

export default Result
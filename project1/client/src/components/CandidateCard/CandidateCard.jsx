import React from 'react'
import './CandidateCard.css'

const CandidateCard = ({candidate,onVote,voted}) => {
  return (
    <div className=''>
       <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-12 items-center justify-center w-[700px] py-3 text-[20px] font-serif">
           <h3>{candidate.name}</h3>
            <p>{candidate.age}</p>
            <p>{candidate.party}</p>
            <button className='bg-blue-500 p-2 w-[100px] rounded-full text-white' onClick={() => onVote(candidate._id)} disabled={voted}>Vote</button>
       </div>
    </div>
  )
}

export default CandidateCard
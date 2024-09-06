import React, { useState, useEffect } from 'react'
import './VotingDashboard.css'
import CandidateList from '../CandidateList/CandidateList'
import Vote from '../../assets/vote2.webp'
import { BASE_URL } from '../../service'
import { toast } from 'react-toastify'
import { useVote } from '../../store/vote'

const VotingDashboard = () => {
    const [token, setToken] = useState('');
    const {hasVoted , toggleVote} = useVote()

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleVote = async (candidateId) => {
        if (hasVoted) {
            alert('You have already voted');
            return;
        }

        let responseData;
        await fetch(`${BASE_URL}/api/v1/candidate/vote/${candidateId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => res.json()).then((data) => responseData = data);

        if (responseData.success) {
            toast.success("Vote Successful");
            toggleVote(true);
        } else {
            toast.error("You have already voted");
            toggleVote(true);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6 font-mono bg-[#020817] text-white p-6">
            <div className="text-center md:text-left">
                <h1 className='text-2xl font-bold mb-4'>
                    Click on <span className='text-[#E879F9] font-bold'>VOTE</span> button to cast your vote
                </h1>
                <img src={Vote} alt="Vote Illustration" className="w-full max-w-md mx-auto md:mx-0" />
            </div>
            <div className="candidate-section bg-[#0F1629] p-6 rounded-lg shadow-lg">
                <div className="candidate-title text-lg font-bold mb-4 border-b border-[#E879F9] pb-2">
                    <div className="grid grid-cols-3 gap-4">
                        <p className="text-[#E879F9]">Name</p>
                        <p className="text-[#E879F9]">Age</p>
                        <p className="text-[#E879F9]">Party</p>
                    </div>
                </div>
                <CandidateList onVote={handleVote} voted={hasVoted} />
            </div>
        </div>
    );
    
};

export default VotingDashboard;

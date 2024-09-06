import React, { createContext, useContext, useState } from 'react';
const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const toggleVote = () => setHasVoted(true);

    return (
        <VoteContext.Provider value={{ hasVoted, toggleVote }}>
            {children}
        </VoteContext.Provider>
    );
};
export const useVote = () => useContext(VoteContext);

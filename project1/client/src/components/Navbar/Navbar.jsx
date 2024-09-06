import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../store/auth'
import { useVote } from '../../store/vote'

const Navbar = () => {
    const { isLoggedIn } = useAuth()
    const { hasVoted } = useVote()

    return (
        <header className="bg-[#020817] text-white mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-[#E879F9]">
                    VotePulse
                </a>

                <div className="flex space-x-4 items-center">
                    <a
                        href="/"
                        className="px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
                    >
                        Home
                    </a>

                    {hasVoted && isLoggedIn ? (
                        <>
                            <a
                                href="/result"
                                className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Result
                            </a>
                            <a
                                href="/logout"
                                className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
                            >
                                Logout
                            </a>
                        </>
                    ) : isLoggedIn ? (
                        <a
                            href="/logout"
                            className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
                        >
                            Logout
                        </a>
                    ) : (
                        <a
                            href="/register"
                            className="px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600 transition duration-300"
                        >
                            Register
                        </a>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar

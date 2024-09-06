import React from 'react'
export default function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-[#020817] text-white">
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E879F9] to-[#F0ABFC]">
              Empower Your Voice with VotePulse
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Secure, transparent, and easy-to-use voting platform for modern democracy.
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-3 bg-[#E879F9] text-black text-lg rounded hover:bg-[#F0ABFC] transition duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LockIcon className="w-12 h-12 text-[#E879F9]" />}
              title="Secure Voting"
              description="State-of-the-art encryption ensures your vote remains confidential and tamper-proof."
            />
            <FeatureCard
              icon={<BarChartIcon className="w-12 h-12 text-[#E879F9]" />}
              title="Real-time Results"
              description="Watch live as votes are tallied and results are updated instantly."
            />
            <FeatureCard
              icon={<UsersIcon className="w-12 h-12 text-[#E879F9]" />}
              title="Community Driven"
              description="Create and participate in polls that matter to your community."
            />
          </div>
        </main>
      </div>
    );
  }
  
  function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-[#0F1629] p-6 rounded-lg">
        <div className="mb-4">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  }
  
  function LockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }
  
  function BarChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    );
  }
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  

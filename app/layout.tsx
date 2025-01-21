import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Root layout component for the Wells Fargo dashboard
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header section with logo and navigation */}
        <header className="bg-[#D71E28] text-white py-3 border-b-4 border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider">WELLS FARGO</div>
            <div className="flex items-center gap-6">
              <button className="hover:bg-[#b91922] p-2 rounded-full">
                <SearchIcon />
              </button>
              <div className="flex items-center gap-2 hover:bg-[#b91922] px-3 py-2 rounded">
                <SignOffIcon />
                <span>Sign Off</span>
              </div>
              <div className="flex items-center gap-2 pl-2 border-l border-[#b91922]">
                <UserIcon />
                <span>Welcome, LORI</span>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation bar with dropdowns */}
        <nav className="bg-white border-b">
          <div className="flex justify-center px-4">
            <div className="flex space-x-12">
              {/* Navigation items go here */}
              <div className="relative group">
                <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  Accounts <ArrowIcon />
                </button>
                <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">View Accounts</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Manage Accounts</a>
                </div>
              </div>
              <span className="text-gray-400 flex items-center">|</span>
              <div className="relative group">
                <button className="px-4 py-2 hover:bg-gray-100">Brokerage</button>
              </div>
              <span className="text-gray-400 flex items-center">|</span>
              <div className="relative group">
                <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  Transfer & Pay <ArrowIcon />
                </button>
                <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Transfer Money</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pay Bills</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Send Money</a>
                </div>
              </div>
              <span className="text-gray-400 flex items-center">|</span>
              <div className="relative group">
                <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  Plan & Learn <ArrowIcon />
                </button>
                <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Financial Planning</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
                </div>
              </div>
              <span className="text-gray-400 flex items-center">|</span>
              <div className="relative group">
                <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  Security & Support <ArrowIcon />
                </button>
                <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Security Center</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Support</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Gray container below the navigation bar */}
        <div className="bg-gray-100 py-0 border-b border-gray-300">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Account Summary</h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-black hover:underline">
                <SwitchIcon />
                Switch Account
              </button>
              <button className="flex items-center gap-2 text-blue-600 hover:bg-gray-100">
                <PrintIcon />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  );
}

// Search icon component
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sign off icon component
const SignOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// User icon component
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow icon component
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Switch icon component
const SwitchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 9L12 16.5L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Print icon component
const PrintIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6h12v6H6z" />
    <path d="M6 12h12v6H6z" />
    <path d="M6 18h12" />
  </svg>
);

// Home icon component
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

  import React from 'react';

export default function Home() {
  const currentBalance = 12000013.33;
  const postedBalance = 9794.33;
  const pendingDeposits = 368.20;

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/1.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor: 'rgba(255,255,255,0.9)',
        // backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-0">
          <div className="col-span-2">
            <div className="bg-white p-6 mb-0">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <WalletIcon />
                    <h2 className="text-2xl font-semibold text-red-600">WAY2SAVE® CHECKING</h2>
                    <div className="ml-auto flex items-center">
                      <button className="text-gray-500 hover:text-gray-700 mr-2">
                        <PrintIcon />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center -mt-1">
                    <button className="hover:text-blue-700 flex items-center" style={{textDecoration: 'underline dashed'}}>
                      <SwitchIcon className="mr-2" />
                      Account ...0581
                    </button>
                    <span className="mx-2">•</span>
                    <button className="text-blue-600 hover:text-blue-700" style={{textDecoration: 'underline dashed'}}>
                      Routing Numbers
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                  <div className="text-sm text-gray-600" style={{textDecoration: 'underline dashed'}}>Available balance</div>
                </div>
              </div>
              <div className="flex items-center gap-0">
                <button className="p-2 text-blue-600 hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="border-t border-b border-l border-r border-gray-200 shadow-sm flex-1">
                  <div className="flex gap-4 overflow-x-auto py-2 px-4 whitespace-nowrap">
                    <ActionButton icon={<TransferIcon />} text="Transfer Money" />
                    <ActionButton icon={<BillIcon />} text="Pay Bills" />
                    <ActionButton icon={<SendIcon />} text="Send Money" />
                    <ActionButton icon={<WalletIcon />} text="Digital Wallet" />
                    <ActionButton icon={<DocumentIcon />} text="View Statements" />
                  </div>
                </div>

                <button className="p-2 text-blue-600 hover:bg-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white shadow p-6 mt-0">
              {/* <div className="border-b border-gray-300 h-0.5"></div> */}
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">Activity Summary</h2>
              <div className="space-y-4">
                <SummaryRow label="Current posted balance" amount={`$${postedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                <SummaryRow label="Pending withdrawals/debits" amount="$0.00" />
                <SummaryRow label="Pending deposits/credits" amount={`+$${pendingDeposits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} amountClassName="text-green-600" />
                <SummaryRow label="Available balance" amount={`$${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded w-full">
                  <button className="text-blue-600 font-bold underline text-sm">Monthly Service Fee Summary</button>
                </div>
                <div className="mt-4 pt-4">
                  <button className="text-black hover:underline text-sm border-b-2 border-dashed border-gray-300">Routing numbers</button>
              </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 p-6 h-fit">
              <div className="flex flex-col items-center text-white">
                <div className="mb-20">
                  <svg width="40" height="35" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">Deposits on the go</h2>
                <p className="text-gray-300 text-center mb-4">The digital tools you're looking for</p>
              </div>
            </div>

            <div className="bg-white shadow p-6 mt-0">
              <div className="space-y-2">
                <SidebarLink text="Order Checks and Deposit Tickets" className="text-blue-600" />
                <SidebarLink text="Manage Travel Plans" className="text-blue-600" />
                <SidebarLink text="Turn Card On or Off" className="text-blue-600" />
              </div>
              <div className="flex justify-center mt-4">
                <button className="-mx-6 w-[calc(100%+3rem)] text-blue-600 hover:underline text-base border-t border-b border-gray-300 py-3" style={{color: 'blue'}}>View More Services</button>
              </div>
            </div>

            <div className="bg-white shadow p-6 mt-0">
              <div className="flex items-center gap-4">
                <HomeIcon />
                <div className="w-full">
                  <SidebarLink text="Get a Free Prequalification" className="text-blue-600 pl-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ActionButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button className="flex items-center gap-3 py-1 hover:bg-gray-50">
    <div className="text-blue-600">{icon}</div>
    <span className="text-sm text-gray-700">{text}</span>
  </button>
);

const SummaryRow = ({ label, amount, amountClassName }: { label: string; amount: string; amountClassName?: string }) => {
  const shouldHaveUnderline = label === "Current posted balance";
  const isAvailableBalance = label === "Available balance";
  
  const grayBackgroundLabels = [
    "Current posted balance", 
    "Pending deposits/credits", 
    "Monthly Service Fee Summary"
  ];

  const rowClassName = grayBackgroundLabels.includes(label) 
    ? "flex justify-between items-center bg-gray-100 p-2" 
    : "flex justify-between items-center";

  return (
    <div className={rowClassName}>
      <span className={`text-gray-600 ${shouldHaveUnderline ? 'border-b-2 border-dashed border-gray-300' : ''} ${isAvailableBalance ? 'font-bold' : ''}`}>{label}</span>
      <span className={`font-semibold ${amountClassName || ''}`}>{amount}</span>
    </div>
  );
};

const SidebarLink = ({ text, className }: { text: string, className?: string }) => (
  <button className={`flex items-center justify-between w-full text-left hover:bg-gray-50 p-1 rounded ${className || 'text-blue-600'}`}>
    {text}
    <ChevronRight />
  </button>
);

// Icons components (simplified versions)
const SwitchIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4v7h7M4 11l7-7M20 20v-7h-7M20 13l-7 7" />
  </svg>
);

const PrintIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z" />
  </svg>
);

const TransferIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 1l4 4-4 4M3 11h16M7 19l-4-4 4-4" />
  </svg>
);

const BillIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 15h10M7 9h10" />
  </svg>
);

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2V8h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const MobileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

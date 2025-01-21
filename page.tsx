import Image from "next/image"
import Link from "next/link"
import { Search, User, ChevronDown, Printer, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WellsFargo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-[#D71E2B] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Wells Fargo"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
              <button className="p-2">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm">
                <span>Sign Off</span>
              </button>
              <button className="flex items-center space-x-2 text-sm">
                <User className="h-5 w-5" />
                <span>Welcome, ANTHONY</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button className="px-4 py-3 text-sm hover:bg-gray-100">
              Accounts
              <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </button>
            <button className="px-4 py-3 text-sm hover:bg-gray-100">Brokerage</button>
            <button className="px-4 py-3 text-sm hover:bg-gray-100">
              Transfer & Pay
              <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </button>
            <button className="px-4 py-3 text-sm hover:bg-gray-100">
              Plan & Learn
              <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </button>
            <button className="px-4 py-3 text-sm hover:bg-gray-100">
              Security & Support
              <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Account Summary */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-gray-600">
              Account Summary
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <select className="text-sm border rounded px-2 py-1">
              <option>Switch Account</option>
            </select>
            <Button variant="ghost" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white border rounded-lg shadow">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold text-[#D71E2B]">WAY2SAVE® CHECKING</h2>
                <div className="mt-1 text-sm text-gray-600">
                  <span>Account ...0581</span>
                  <span className="mx-2">•</span>
                  <Link href="#" className="text-blue-600">
                    Routing Numbers
                  </Link>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold">$10,162.53</div>
                <div className="text-sm text-gray-600">Available balance</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-6 border-b pb-6">
              <Button variant="ghost" size="sm" className="text-blue-600">
                Transfer Money
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Pay Bills
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Send Money
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Digital Wallet
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600">
                View Statements
              </Button>
              <div className="flex-1 flex justify-end space-x-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Activity Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Link href="#" className="text-blue-600">
                    Current posted balance
                  </Link>
                  <span>$9,794.33</span>
                </div>
                <div className="flex justify-between">
                  <span>Pending withdrawals/debits</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pending deposits/credits</span>
                  <span className="text-green-600">+$368.20</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Available balance</span>
                  <span>$10,162.53</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="mt-6 bg-gray-100 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Deposits on the go</h3>
            <p className="text-sm text-gray-600 mb-4">The digital tools you're looking for</p>
            <div className="space-y-2">
              <Link href="#" className="block text-blue-600 hover:underline">
                Order Checks and Deposit Tickets
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Manage Travel Plans
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                Turn Card On or Off
              </Link>
              <Link href="#" className="block text-blue-600 hover:underline">
                View More Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


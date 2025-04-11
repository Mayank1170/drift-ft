'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  return (
    <nav className="bg-drift-dark border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Drift Protocol
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/trading" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Trading
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-drift-blue text-white px-4 py-2 rounded-md text-sm font-medium">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

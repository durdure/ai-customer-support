import React from 'react'
import Head from 'next/head'

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold font-orbitron">
          AI Support
        </div>
        
    
        <nav className="space-x-4">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>

      
        <div className="space-x-4">
          <a href="#login" className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">Login</a>
          <a href="#signup" className="px-4 py-2 bg-green-600 rounded-full hover:bg-green-700 transition-all">Sign Up</a>
        </div>
      </div>
    </header>
  )
}

export default Header

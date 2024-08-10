import React from 'react'
import Head from 'next/head'
import Header from './Header'

function Homepage() {
  return (
    <>
        <Head>
            <title>Ai-customer-support</title>
            <link 
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" 
            rel="stylesheet"
            />
        </Head>
        <Header/>
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-fixed">
            <div className="text-center">
                <div className="text-4xl font-bold text-white mb-4 animate-slideIn">
                    <h1 className="title">
                        Ai-customer-support
                    </h1>
                    <h2 className="text-2xl text-white animate-slideIn delay-300">
                        A simple customer support chatbot
                    </h2>
                </div>

                <div className="flex space-x-4">
            <a 
              href="#learn-more"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
</a>
            <a 
              href="#get-started"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

            </div>
           
        </section>
        

        <section id="learn-more" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Learn More</h2>
                    <p className="text-gray-600">About the Ai-customer-support</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <img src="/images/undraw_chatting_2yvo.svg" alt="chatting" className="w-full"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Chatbot</h2>
                        <p className="text-gray-600">A chatbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="get-started" className="py-20 bg-gray-200">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Get Started</h2>
                    <p className="text-gray-600">Get started with the Ai-customer-support</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold">Sign Up</h2>
                        <p className="text-gray-600">Sign up to get started with the Ai-customer-support</p>
                    </div>
                    <div>
                        <img src="/images/undraw_sign_in_e6hj.svg" alt="sign in" className="w-full"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Homepage
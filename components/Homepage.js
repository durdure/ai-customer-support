import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Slider from 'react-slick';
import Link from 'next/link';

function Homepage() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      };
  return (
    <>
        <Head>
            <title>Ai-customer-support</title>
            <link 
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" 
            rel="stylesheet"
            />
             <style jsx global>{`
                @keyframes slideIn {
                    from {
                    transform: translateX(-100%);
                    opacity: 0;
                    }
                    to {
                    transform: translateX(0);
                    opacity: 1;
                    }
                }
                .animate-slideIn {
                    animation: slideIn 1s ease-out;
                }
        `}</style>

        </Head>
        <Header/>
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-fixed">
        <div className="container mx-auto flex items-center justify-between px-6 py-12">
          <div className="flex-1">
            <img 
              src="https://media2.giphy.com/avatars/acetech/RK67baKq9A79.gif" 
              alt="chatting gif" 
              className="w-full max-w-sm rounded-lg animate-slideIn delay-300"
            />
          </div>
          <div className="flex-1 text-center">
            <div className="text-4xl font-bold text-white mb-4 animate-slideIn">
              <h1 className="title">
                Ai-customer-support
              </h1>
              <h2 className="text-2xl text-white animate-slideIn delay-300">
                A simple customer support chatbot
              </h2>
            </div>

            <div className="flex space-x-4 justify-center">
              <a 
                href="#learn-more"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </a>
              <Link href="/chat" className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300">    
                  Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

        
      <section id="learn-more" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Learn More</h2>
            <p className="text-lg mb-8">Explore the future of AI and how our chatbot technology is shaping the world of customer support.</p>
          </div>

          <slider {...sliderSettings}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/236x/44/9c/b9/449cb93bd42617c69963478764ee09eb.jpg" 
                alt="chatting" 
                className="w-cover ml-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105
                
                "
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-800 text-white p-4 rounded-lg shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">Interactive AI</h3>
                  <p>Discover how advanced AI is used in creating dynamic and engaging customer interactions.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">What is a Chatbot?</h2>
              <p className="text-gray-300 mb-4">
                A chatbot is an artificial intelligence (AI) program designed to simulate human conversation through text or voice interactions. 
                These bots are used to handle a variety of tasks, including answering customer queries, providing recommendations, and assisting with complex workflows.
              </p>
              <p className="text-gray-300 mb-4">
                Chatbots can be integrated into websites, messaging apps, and customer service platforms to offer round-the-clock support and enhance user experience. They use natural language processing (NLP) to understand and respond to user inputs in a conversational manner.
              </p>
              <p className="text-gray-300">
                Our chatbot technology leverages machine learning to continuously improve responses and adapt to user needs. This ensures a more personalized and efficient interaction, making customer support seamless and effective.
              </p>
            </div>
          </div>

          </slider>

          
        </div>
      </section>


      <section id="get-started" className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Started</h2>
            <p className="text-lg mb-8">Ready to enhance your customer support with our AI chatbot? Follow these simple steps to get started.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="https://cdn.dribbble.com/users/1373613/screenshots/6200333/__1.gif" 
                alt="sign up" 
                className="w-ful rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                style={{maxWidth: '400px'}}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">Sign Up Today</h2>
              <p className="text-gray-200 mb-4">
                Signing up is quick and easy. Just click the button below to start using our AI chatbot solution and take your customer support to the next level.
              </p>
              <a 
                href="#"
                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Ai-customer-support. All rights reserved.</p>
          <p className="mb-2">1234 Akaki Kality, Addis Ababa, Ethiopia</p>
          <p className="mb-2">Email: contact@aicustomersupport.com | Phone: +1 (123) 456-7890</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
            <a href="#" className="text-blue-400 hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Homepage
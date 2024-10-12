import React, { useState } from 'react'
import { FaGithub, FaCoffee } from 'react-icons/fa'

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-4 transform transition-transform duration-300 hover:scale-105">
            Background Remover
          </h1>
          <p className="text-xl">Remove backgrounds from your images with ease!</p>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li className="transition-all duration-300 hover:translate-x-2">Upload your image</li>
                <li className="transition-all duration-300 hover:translate-x-2">Click "Remove Background"</li>
                <li className="transition-all duration-300 hover:translate-x-2">Download your image with a transparent background</li>
              </ol>
              <div className="mt-8">
                <a
                 href="/remove-background"
                  className="inline-block py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? 'Let\'s Go!' : 'Get Started'}
                </a>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://sb.kaleidousercontent.com/67418/604x802/51d867647f/people-1-transparent2.jpg?height=300&width=400"
                alt="Background Removal Demo"
                className="rounded-lg shadow-md transition-all duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Demo Image</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 text-center">
          <p className="text-gray-600 mb-4">
            Powered by advanced AI technology to deliver high-quality results
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/swappy-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.buymeacoffee.com/swapnil2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 flex items-center"
            >
              <FaCoffee size={24} className="mr-2" />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
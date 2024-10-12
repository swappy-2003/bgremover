'use client'

import React, { useState } from 'react'

export default function BackgroundRemover() {
  const [image, setImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  // Use process.env for Next.js or import.meta.env for Vite
  const API_KEY = import.meta.env.VITE_REMOVE_BG_API_KEY;


  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
    }
  }

  const removeBackground = async () => {
    if (!image) return

    setLoading(true)
    const formData = new FormData()
    formData.append('image_file', image)

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': API_KEY,
        },
        body: formData,
      })

      if (response.ok) {
        const blob = await response.blob()
        setProcessedImage(URL.createObjectURL(blob))
      } else {
        console.error('Background removal failed')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (processedImage) {
      try {
        const response = await fetch(processedImage);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'processed_image.png';
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download failed:', error);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-40">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
        <h2 className="text-2xl font-bold">Background Remover</h2>
      </div>
      <div className="p-6">
        <label
          htmlFor="image-upload"
          className="block w-full p-4 text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
        >
          <span className="text-gray-600">
            {image ? 'Change Image' : 'Click to upload an image'}
          </span>
          <input
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </label>
        {image && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Original Image</h3>
            <img
              src={URL.createObjectURL(image)}
              alt="Original"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        {processedImage && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Processed Image</h3>
            <img
              src={processedImage}
              alt="Processed"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
      <div className="bg-gray-50 p-6">
        <button
          onClick={removeBackground}
          disabled={!image || loading}
          className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
        >
          {loading ? 'Processing...' : 'Remove Background'}
        </button>
        
        {processedImage && (
          <button
            onClick={handleDownload}
            className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Download Processed Image
          </button>
        )}
      </div>
    </div>
  )
}
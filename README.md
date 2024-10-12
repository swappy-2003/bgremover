# Background Remover

## Overview
Background Remover is a React-based web application that allows users to upload an image and remove its background using the Remove.bg API. The processed image can then be downloaded with a transparent background.

## Features
- Image upload functionality
- Background removal using Remove.bg API
- Display of original and processed images
- Download capability for the processed image

## Prerequisites
- Node.js (v14 or later recommended)
- npm or yarn
- A Remove.bg API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/background-remover.git
   cd background-remover
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Remove.bg API key:
   ```
   NEXT_PUBLIC_REMOVE_BG_API_KEY=your_api_key_here
   ```
   or if you're using Vite:
   ```
   VITE_REMOVE_BG_API_KEY=your_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```
   or with yarn:
   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port specified in your console).

3. Click on the "Click to upload an image" area to select an image from your device.

4. Once an image is selected, click the "Remove Background" button to process the image.

5. After processing, you can view the result and click "Download Processed Image" to save the image with the background removed.

## Component Structure

The main component `BackgroundRemover` handles the following:
- Image upload
- API interaction with Remove.bg
- Display of original and processed images
- Download functionality for the processed image

## Styling

The component uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project for the styles to work correctly.

## API Usage

This project uses the Remove.bg API to process images. Ensure you have a valid API key and have set it in your environment variables as described in the Installation section.

## Error Handling

The component includes basic error handling for API requests and download functionality. Errors are logged to the console.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
 
 

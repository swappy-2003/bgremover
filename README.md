# Background Remover

This project is a web application that allows users to remove backgrounds from images using the Remove.bg API.

## Features

- Upload images
- Remove backgrounds from uploaded images
- Download processed images

## Technologies Used

- React
- Next.js
- Tailwind CSS
- Remove.bg API

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Remove.bg API key

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/background-remover.git
   ```

2. Navigate to the project directory:
   ```
   cd background-remover
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your Remove.bg API key:
   ```
   NEXT_PUBLIC_REMOVE_BG_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

6. Open your browser and visit `http://localhost:3000`

## Usage

1. Click on the "Choose File" button to upload an image.
2. Click on the "Remove Background" button to process the image.
3. Once processing is complete, click on the "Download" button to save the processed image.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

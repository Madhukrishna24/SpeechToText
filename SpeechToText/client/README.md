
# Speech-to-Text Application

This is a simple speech-to-text application built using React and TypeScript. It allows users to convert spoken words into text using the browser's speech recognition capabilities.

## Features

- Start and stop speech recognition.
- Continuous listening and real-time text update as the user speaks.
- Display the spoken text in a user-friendly interface.

## Technologies Used

- React
- TypeScript
- Web Speech API (for speech recognition)

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
   
2. Navigate to the project directory:
   ```bash
   cd client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

## File Structure

```
src/
│
├── componet/
│   ├── Transulator.tsx       # Speech recognition component
│   ├── Transulator.css       # Styles for Transulator component
│
├── App.tsx                   # Main application file
├── App.css                   # Global styles for the app
├── main.tsx                  # Application entry point
└── vite-env.d.ts             # TypeScript configuration
```

## Dependencies

- React
- TypeScript
- Vite (for fast development builds)

## How to Use

1. Press the "Start Listening" button to start speech recognition.
2. Speak into your microphone, and the text will appear in real-time.
3. Press the "Stop Listening" button to stop recognition.


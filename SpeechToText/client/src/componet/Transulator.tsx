import React, { useState } from 'react';
import './Transulator.css';

const Transulator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  const startListening = () => {
    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const speechToText = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      setText(speechToText);
    };
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div className="container">
      <h1>Speech to Text</h1>
      <div className="textBox">
        <h2>Spoken Text</h2>
        <p>{text}</p>
      </div>
      <div className="buttons">
        {!isListening ? (
          <button onClick={startListening} className="startButton">Start Listening</button>
        ) : (
          <button onClick={stopListening} className="stopButton">Stop Listening</button>
        )}
      </div>
    </div>
  );
};

export default Transulator;

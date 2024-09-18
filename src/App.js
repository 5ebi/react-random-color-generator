import randomColor from 'randomcolor';
import { useState } from 'react';

const black = 'black';
const offwhite = 'whitesmoke';
export default function App() {
  const [color, setColor] = useState(black);

  const handleGenerate = () => {
    const newColor = randomColor({ luminosity: 'dark' });
    setColor(newColor);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: color,
      }}
    >
      <h1 style={{ fontSize: 100, color: offwhite }}>Random Color Generator</h1>

      <div
        style={{
          backgroundColor: 'black',
          fontSize: '20px',
          fontWeight: '900',
          color: '#ffffff',
          width: '350px',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontWeight: 800,
            color: offwhite,
          }}
        >
          Generated Color:
          <br></br>
        </p>
        <p
          style={{
            fontSize: '35px',
            color: color,
          }}
        >
          {color}
        </p>

        <button
          onClick={handleGenerate}
          style={{
            width: '130px',
            padding: '10px',
            fontSize: '18px',
            fontWeight: '900',
            cursor: 'pointer',
            backgroundColor: offwhite,
            color: black,
            borderRadius: '10px',
            border: 5,
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

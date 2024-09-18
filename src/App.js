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
        justifyContent: 'center',
        backgroundColor: color,
        overflow: 'auto',
      }}
    >
      <h1 style={{ fontSize: '5vw', color: offwhite, marginBottom: '400px' }}>
        Random Color Generator
      </h1>

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
          marginBottom: '10px',
        }}
      >
        <p
          style={{
            fontWeight: 800,
            color: offwhite,
          }}
        >
          Generated Color:
          <br />
        </p>
        <p
          style={{
            fontSize: '35px',
            color: color,
          }}
        >
          {color}
        </p>
      </div>
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
          borderRadius: '5px',
          border: '3px solid lightgrey', // Korrektur hier
          marginTop: '20px', // Abstand zum vorherigen Element
        }}
      >
        Generate
      </button>
    </div>
  );
}

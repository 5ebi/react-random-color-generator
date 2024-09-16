import randomColor from 'randomcolor';
import useState from 'react';

export default function App() {
  const color = randomColor();

  console.log(color);
  return (
    <>
      <h1 style={{ fontSize: 100, textAlign: 'center', color: color }}>
        Random Color Generator
      </h1>
      <h2 style={{ fontSize: 50, textAlign: 'center', color: color }}>
        {color}
      </h2>
      {/* <button onClick={sayHello}>Default</button>; */}
    </>
  );
}
console.log('test');

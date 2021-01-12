import './App.css';
import React, { useState } from 'react'
import Form from "./components/Box"
import BoxDisplay from "./components/BoxDisplay"
import FadeIn from 'react-fade-in';


function App() {

  const [colors, setColors] = useState([]);
  const addColor = (color) => {
    setColors([...colors, color])
  }

  function handleBoxColor(color) {
    if (color !== "") {
      return < BoxDisplay color={color} />
    }
  }

  return (
    <FadeIn className="homeFade" transitionDuration="1000" delay="0">
      <div className="App" style={{ marginTop: 100 }}>
        <FadeIn className="h1Fade" transitionDuration="500" delay="500">
          <h1 style={{ fontWeight: 800, letterSpacing: 2 }}>Create a New Box!</h1>
        </FadeIn>
        <div className="form">
          <Form addColor={addColor} />
        </div>
        {colors.map(color =>
          handleBoxColor(color)
        )}
      </div>
    </FadeIn>
  );
}

export default App;

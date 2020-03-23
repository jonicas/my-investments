import React from "react";
import "./App.css";
import Income from "./screens/Income/Income";

function App() {
  return (
    <div className="App">
      <div className="App_Layout">
        <header className="App_Header"></header>
        <main className="AppScreen_Container">
          <Income />
        </main>
      </div>
    </div>
  );
}

export default App;

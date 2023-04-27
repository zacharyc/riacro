import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AcroClass from "./AcroClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhode Island Acroyoga</h1>
      </header>
      <div className="main-content">
        <h2>Acroyoga in Rhode Island</h2>
        <p>
          Acroyoga is a blend of yoga, partner acrobatics, and Thai message.
          This page is dedicated to information about the practice of Acroyoga
          in Rhode Island. Find information about classes and jams across the
          state. If you are running a class or jam that is not listed on this
          page, please reach out via the facebook group.
        </p>
        <h2>What is Acroyoga</h2>
        <p>
          Acroyoga, often confused with ariel yoga, is a partner based activity.
          In this activity we work through poses, transitions, and pops. It was
          first named in the early 2000s, and has been moving across the country
          ever since.
        </p>
        <p>
          While there is a large community in the Boston area, it is slowly
          spreading down into Rhode Island.
        </p>
        <h2>Where can you find it?</h2>
        <p>
          There are currently three weekly classes in Rhode Island, and
          hopefully that number will grow.
        </p>
        <h3>Thursday</h3>
        <AcroClass />
      </div>
    </div>
  );
}

export default App;

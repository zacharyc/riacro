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
        <AcroClass
          location="YMCA Newport County"
          address="792 Valley Road, Middletown, RI"
          time="7:30pm - 8:45pm"
          level="Beginner"
          cost="$15"
          teacher="Zack Cohen"
        />

        <h3>Sunday</h3>
        <AcroClass
          location="Fitness 500"
          address="181 Bellevue Ave, Unit 12, Newport, RI"
          time="2:30pm - 3:30pm"
          level="Beginner"
          cost="$20"
          teacher="Zack Cohen"
        />

        <AcroClass
          location="Rhode Island Circus Space"
          address="5 Soule Street, Warwick, RI"
          time="5:00pm - 6:30pm"
          level="Beginner"
          cost="$20"
          teacher="Zack Cohen"
        />

        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/groups/riacro">
              RI Acro Facebook Group
            </a>
          </li>
          <li>
            <a href="https://www.newportacroyoga.com">Newport RI Acroyoga</a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/385663384785081">
              Boston Acro Play Facebook Group
            </a>
          </li>
        </ul>
      </div>
      <footer>
        <p>More information to come.</p>
      </footer>
    </div>
  );
}

export default App;

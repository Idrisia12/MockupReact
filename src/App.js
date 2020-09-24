import React from 'react';
import red from "../src/icon-team-builder.svg";
import blue from "../src/icon-calculator.svg";
import yellow from "../src/icon-karma.svg";
import green from "../src/icon-supervisor.svg";
import './App.css';

function App() {
  return (
    <div className="App">

    <header>
            <h1>Reliable, efficient delivery<br />
            <span style={{ fontWeight: 'bolder'}}>Powered by Technology</span></h1>
            <p className="details">Our Artificial Intelligence powered tools use millions of project data <br />points to ensure that your project is successful</p>
    </header>

    <main>
     <div className="box">
       <div className="square green">
         <h2>Supervisor</h2>
         <p>Monitors activity to identify project roadblocks</p>
         <p className="img">
         <img
            src={green}
            alt="Supervisor logo"
          />
          </p>
       </div>

       <div className="square red">
         <h2>Team Builder</h2>
         <p>Scans our talent network to create the optimal team for your project</p>
         <p className="img">
         <img
            src={red}
            alt="Team Builder logo"
           />
         </p>
       </div>

       <div className="square yellow">
         <h2>Karma</h2>
         <p>Regularly evaluates our talent to ensure quality</p>
         <p className="img">
         <img
            src={yellow}
            alt="Karma logo"
           />
         </p>
       </div>

       <div className="square blue">
         <h2>Calculator</h2>
         <p>Uses data from past projects to provide better delivery estimates</p>
         <p className="img">
         <img
            src={blue}
            alt="Calculator logo"
           />
         </p>
       </div>

     </div>
   </main>

    </div>
  );
}

export default App;

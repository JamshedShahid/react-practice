// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
import Dark from "./dark/dark.jsx"
import On from "./dark/on.jsx";
import Modes from "./onoff.jsx";


function App(){
  return(
   
    <>
   
    <Dark />
    <Modes/>
    {/* <On /> */}
    
    </>
    
  )

}
export default App;
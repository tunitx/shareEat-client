// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Navbar';


// function App() {
//   return (
//     <div className="App">
//       <Header/>
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
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Header from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
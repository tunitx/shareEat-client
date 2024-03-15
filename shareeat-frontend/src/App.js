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
import NgoList from './components/NgoList';

function App() {
  return (
    <div className='bg-gradient-to-r from-[rgba(55,35,56,1)] to-[rgba(111,39,64,1)]' >
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header/>} />
        
        </Routes>
      </div>
    </Router>

    <NgoList></NgoList>

    </div>
  );
}

export default App;
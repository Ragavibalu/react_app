//import logo from './logo.svg';
import './App.css';

//import PropsComponent from './components/functionalcomponents/PropsComponents';
//import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import About from './components/functionalcomponents/About';
import Experience from './components/functionalcomponents/Experience';
import Home from './components/functionalcomponents/Home';
import Login from './components/functionalcomponents/Login';
import Reference from './components/functionalcomponents/Reference';
import Memo from './components/functionalcomponents/Memo';
import Callback from './components/functionalcomponents/callback';
import map from 'core-js/fn/array/map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/useRef" element={<Reference />}></Route>
          <Route path="/Memo" element={<Memo/>}></Route>
          <Route path="/Callback" element={<Callback/>}></Route>
          <Route path="/map" element={<map/>}></Route>
      </Routes>
      </BrowserRouter>
      {/*<PropsComponent name="Hello everyone" course="ECE"></PropsComponent>*/}
      <header className="App-header">
       {/*<Statecomponent/>*/}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >git commit
          Learn React
        </a> */}
      </header>
      
  <footer>
  <footer style={{ backgroundColor: '#D6E2E2', color: 'black', padding: '20px', textAlign: 'center' }}>
<p>Contact: ragavib.21ece@gmail.com | Phone: +91-9894913728</p>
<ul style={{ listStyleType: 'none', padding: 0 }}>
    <li> <a href="https://www.linkedin.com/in/ragavi-balu-06b0b6225/"><i class="fab fa-linkedin">linkedin</i></a>
</li>
    <li><a href="/terms-of-service">Terms of Service</a></li>
</ul>
</footer>
  
    <p>&copy; 2024 All Rights Reserved By <span>authorized</span></p>
      
    
</footer>

    </div>
  );
}

export default App;

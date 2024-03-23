import logo from './logo.svg';
import './App.css';
import Register from './componets/forms/Register.js';
import Login from './componets/forms/Login.js'
import About from './componets/about/about.js';
import More from './componets/about/moreinfo.js';
import Ouritems from './componets/about/ourItems.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
     <nav class="navbar navbar-light bg-light bg-dark" >
        <ul style={{display:'flex',gap:40,textDecoration:'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/More">More</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Ouritems">Ouritems</Link>
          </li>
        </ul>
      </nav>

   <Routes>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/More" element={<More />}></Route>
        <Route path="/Ouritems" element={<Ouritems />}></Route>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;

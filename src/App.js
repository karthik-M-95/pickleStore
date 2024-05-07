import logo from './logo.svg';
import './App.css';
import About from './componets/about/about.js';
import More from './componets/about/moreinfo.js';
import Ouritems from './componets/about/ourItems.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from './componets/forms/Navigator';
import Footer from './componets/forms/Footer';


function App() {
  return (
    <>
    {/* <div class="card" style={{width: 200}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}
    
   <BrowserRouter>
     <Navigator />
     <Routes>
         <Route path="/" element={<About />}></Route>
           <Route path="/More" element={<More />}></Route>
           <Route path="/Ouritems" element={<Ouritems />}></Route>
     </Routes>
    <Footer />
     </BrowserRouter>
     </>
  );
}

export default App;

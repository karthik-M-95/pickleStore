import logo from './logo.svg';
import './App.css';
import About from './componets/about/about.js';
import More from './componets/about/moreinfo.js';
import Ouritems from './componets/about/ourItems.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from './componets/forms/Navigator';
import Footer from './componets/forms/Footer';
import Mango from './componets/about/Mango.js';
import Billing from './componets/about/billing.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemModel from './componets/forms/product/ItemModel';
import Product from './componets/forms/product/Product';
import ViewProduct from './componets/forms/product/ViewProduct';
import AboutUs from './componets/forms/product/AboutUs';



function App() {
  return (
    <>
    <BrowserRouter>
     <Navigator />
     <Routes>
         <Route path="/" element={<About />}></Route>
          <Route path="More" element={<More />}></Route>
          <Route path='aboutus' element={<AboutUs />}></Route>
          <Route path="Ouritems" element={<Product />}>  </Route> 
            <Route path="product/:productId" element={<ViewProduct />}>  </Route> 
          <Route path="Ouritems/mango" element={<Mango/>}></Route>  
          <Route path="Ouritems/mango/billing" element={<Billing/>}></Route> 
          
      </Routes>
    <Footer />
     </BrowserRouter> 
     </>
  );
}

export default App;

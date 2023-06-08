import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from './comnp/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './comnp/counter';
import Custom_button from './comnp/custom_button';
import Home from './comnp/home';
import Footer from './comnp/footer';
import Alert1 from './comnp/alert1';








function App() {
  const [tog, settog] = useState("light");
  const [col, setcol] = useState("dark");
 


  const clicktoggle = () => {
    if (tog === "light") {
      settog("dark");
      setcol("light");
    }
    else {
      settog("light");
      setcol("dark");
    }
  }
  

  


  return (
    <>
      <BrowserRouter>
        <Navbar col={col} setcol={setcol} tog={tog} settog={settog} clicktoggle={clicktoggle} />
       
        <Home />
        <Custom_button   />
        <Footer col={col} setcol={setcol} tog={tog} settog={settog} />
        {/* {<Routes>
  <Route exact path='/counter' element={<Counter/>} />
  </Routes>} */}
      </BrowserRouter>



    </>
  );

}

export default App;

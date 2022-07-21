import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mynavbar from '../src/MyNavBar/Mynavbar';
import About from '../src/About/About'
import Home from '../src/Home/Home';
import Contact from '../src/Contact/Contact'
import ErrorPage from '../src/ErrorPage/ErrorPage';
function App() {
  return (
    <>
    <BrowserRouter>
      <Mynavbar />
      <Routes>
      <Route path="/"  exact element={<Home />} />
      <Route path="/about" exact  element={<About />} />
      <Route path="/contact"  exact element={<Contact />} />
      <Route path='*'   element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

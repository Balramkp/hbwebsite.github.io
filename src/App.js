import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Room from './Components/Room';
import Spa from './Components/Spa';
import Restaurant from './Components/Restaurant';
import Events from './Components/Events';
import Wedding from './Components/Wedding';
import Contact from './Components/Contact';
import Book from './Components/Book';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />

    
      <Routes>
        <Route path='/room' element = {<Room/>} />
        <Route path='/spa' element = {<Spa/>} />
        <Route path='/restaurant' element = {<Restaurant/>} />
        <Route path='/events' element = {<Events/>} />
        <Route path='/wedding' element = {<Wedding/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/book' element = {<Book/>} />
        <Route path='/' element={<Home/>} />
      </Routes>


    <Footer />
      
    </>
  );
}

export default App;

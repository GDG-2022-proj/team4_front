import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// style
import '../styles/body.scss';
import '../styles/reset.scss';
// components
import Detail from './Detail';
import Main from './Main';
import Searchbar from '../components/Searchbar';
import img from '../assets/logo.png';

const index = () => {
  
  return (
    <div className='main'>
      <BrowserRouter>
        <h1 className='logo' onClick={() => {}}><img src={img} alt='logo'/></h1>
        <Searchbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index;

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// style
import '../styles/body.scss';
import '../styles/reset.scss';
import Detail from './Detail';
// components
import Main from './Main';
import img from '../assets/logo.png';

const index = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <h1 className='logo'><img src={img} alt='logo'/></h1>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index;

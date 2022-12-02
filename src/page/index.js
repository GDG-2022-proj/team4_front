import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// style
import '../styles/body.scss';
import '../styles/reset.scss';
import Detail from './Detail';
// components
import Main from './Main';
import img from '../assets/logo.png';
import Searchbar from '../components/Searchbar';

const index = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <h1 className='logo'><img src={img} alt='logo' onClick={() => {}}/></h1>
        <Searchbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index;

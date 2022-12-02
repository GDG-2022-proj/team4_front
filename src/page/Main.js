import React from 'react'
import Imagebox from '../components/Imagebox';
import vsImg from '../assets/vs.png';
// style
import '../styles/main.scss';

const Main = () => {
  return (
    <div className='main2'>
      <Imagebox/>
      <div><img src={vsImg} alt='img'/></div>
      <Imagebox/>
    </div>
  )
}

export default Main

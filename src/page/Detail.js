import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
// style
import '../styles/detail.scss';

const Detail = () => {
  const playerDetail = useSelector(state => console.log(state.searchKeyword));

  return (
    <div className='detail'>
      <div className='detail-content'>
        <p>이름: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.name : ''}</span></p>
        <p>정보: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.description : ''}</span></p>
        <p>키: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.height : ''}</span></p>
        <p>몸무게: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.weight : ''}</span></p>
        <p>나이: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.age : ''}</span></p>
        <p>국적: <span>{playerDetail !== null && playerDetail !== undefined ? playerDetail.nation : ''}</span></p>
      </div>
    </div>
  )
}

export default Detail

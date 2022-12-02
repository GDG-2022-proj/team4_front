import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchData } from '../redux/SoccupApi';
// style
import '../styles/searchbar.scss';

const Searchbar = () => {
  const dispatch = useDispatch();
  const [ keyword, setKeyword ] = useState(''); 

  let inputValue;
  const onChangeMode = (e) => {
    inputValue = e.target.value;
    setKeyword(inputValue);
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(keyword)
      dispatch(getSearchData(keyword));
    }
  }

  return (
    <div className='searchbar'>
      <input onChange={onChangeMode} onKeyDown={onEnter} />
    </div>
  );
}

export default Searchbar;
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import vsImg from '../assets/vs.png';
// style
import '../styles/main.scss';

const Main = () => {

  const test = useSelector(state => console.log(state.readAllPlayer));
  // const test =  [
  //   {
  //     name: "국밥",
  //     src: require('../assets/logo.png').default
  //   },
  //   {
  //     name: "햄버거",
  //     src: require('../assets/logo.png').default
  //   },
  //   {
  //     name: "피자",
  //     src: require('../assets/logo.png').default
  //   },
  //   {
  //     name: "초밥",
  //     src: require('../assets/logo.png').default
  //   },
  // ];

  const [ chosenPlayer, setChosenPlayer ] = useState([])
  const [ displays, setDisplays ] = useState([]);
  const [ winners, setWinners ] = useState([]);

  useEffect(() => {
    test.sort(() => Math.random() - 0.5);
    setChosenPlayer(test);
  }, []);
  // 컴포넌트의 첫 랜더링에만 item 데이터 저장

  useEffect(() => {
    setDisplays([test[0], test[1]]);
  }, []);

  const clickHandler = data => (e) => {
    if(chosenPlayer.length <= 2){
      if(winners.length === 0){
        setDisplays([data]);
      } else{
        let updatedData = [...winners, data];
        setChosenPlayer(updatedData);
        setDisplays([updatedData[0], updatedData[1]]);
        setWinners([]);
      }
    } else if(chosenPlayer.length > 2){
      setWinners([...winners, data]);
      setDisplays([chosenPlayer[2], chosenPlayer[3]]);
      setChosenPlayer(chosenPlayer.slice(2));
    }
  }

  return (
    <div className='main2'>
      {displays.map((item, index) => (
        <div
        className="flex-1"
        key={index}
        onClick={clickHandler(test)}
          >
          <img className="player-img" src={test.src} alt="img"/>
          <div className="name">{test.name}</div>
        </div>
      ))}

      <div><img src={vsImg} alt='img'/></div>
    </div>
  )
}

export default Main

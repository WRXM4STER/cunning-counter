import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { delay } from './utils/delay';
import { increment, updateArray, updateSeconds } from './store/reducer/actionCreators';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const App:React.FC = () => {

  const dispatch = useAppDispatch()
  const {counter, seconds, array} = useAppSelector(state=>state.counterSlice)

  useEffect(()=>{
    if (counter>0) dispatch(updateArray())
  },[counter])

  useEffect(() => {
    console.log(seconds)
    delay(3000).then(ms => {
      dispatch(increment())
      dispatch(updateSeconds(ms/1000))
    })
  }, [seconds]);

  return (
    <div>
      <button onClick={()=>dispatch(increment())} >Инкрементировать</button>
      <div>{counter}</div>
      <div>
        {
          array.map((item)=>{return <span style={{marginRight:10}}>{item}</span>})
        }
      </div>
    </div>
  )
}

export default App;
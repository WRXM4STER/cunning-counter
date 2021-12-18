import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { increment, updateArray, updateSeconds } from "./reducer/actionCreators"
import { delay } from "../../utils/delay"
import styles from "./styles.module.css"

const Counter:React.FC = ()=>{

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
    
    return(
        <div className={styles.container}>
            <div className={styles.counter} onClick={()=>dispatch(increment())}><span>{counter}</span></div>
            <div className={styles.array}>
                {
                    array.map((item)=>{return <span style={{marginRight:10}}>{item}</span>})
                }
            </div>
        </div>
    )
}

export default Counter
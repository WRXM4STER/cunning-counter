import React, { useEffect } from "react"
import counter from "../../store/counter"
import { delay } from "../../utils/delay"
import styles from "./styles.module.css"
import { observer } from "mobx-react-lite"

const Counter:React.FC = observer(()=> {

    useEffect(() => {
        counter.count>0 && counter.updateArray()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[counter.count])

    useEffect(() => {
        delay(3000).then(ms => {
            counter.increment()
            counter.updateSeconds(ms/1000)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter.seconds]);
    
    return(
        <div className={styles.container}>
            <div className={styles.counter} onClick={() => counter.increment()}><span>{counter.count}</span></div>
            <div className={styles.array}>
                {
                    counter.array.map((item,index) => <span key={index} style={{marginRight:10}}>{item}</span>)
                }
            </div>
        </div>
    )
})

export default Counter
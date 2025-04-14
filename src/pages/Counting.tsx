import { useState } from 'react'
import styles from './Counting.module.css'

export default function Counting() {
    const [count, setCount] = useState(0)
    
    function updateCounter() {
        setCount(count + 1)
    }

    return (
        <div className={`${styles.flex} ${styles['flex-justify-content']}`}>
            <div className={styles.container}>
                <p>Number of times you have clicked the button: <span className={styles.bold}>{count}</span></p>
                <button className={styles.button} onClick={updateCounter}>Click me</button>
            </div>
        </div>
    )
}
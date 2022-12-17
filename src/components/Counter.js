import React,{useState} from 'react';
import styles from './Counter.module.css';
import {  useDispatch ,useSelector} from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';

export function Counter() {
  const [incrementAmount,setincrementAmount]=useState()
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const incrementValue=Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          //  onClick={() => dispatch(decrement())}   01
           onClick={() => dispatch(decrement(5))}

          
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}   02
          onClick={() => dispatch(increment(5))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          
         
        />
        <button
          className={styles.button}
          
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
         
        >
          Add Async
        </button>
        <button
          className={styles.button}
         
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

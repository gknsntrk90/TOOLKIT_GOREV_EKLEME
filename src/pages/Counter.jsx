import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);
  

  return (
    <div className="vh-100 d-flex w-full justify-content-center align-items-center">
<div className="d-flex gap-4 align-items-center">
  <button className="btn btn-danger"
  onClick={() => dispatch(decrease())}
  >
    Azalt</button>
  <span>{count}</span>
  <button className='btn btn-success'
  onClick={()=> dispatch(increase())}
  >
    Arrtır</button>
  <button className='btn btn-primary'
  onClick={() => dispatch(setCount(0))}
  >
    Sıfırla</button>
</div>
    </div>
  )
}

export default Counter

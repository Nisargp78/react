import { useState } from "react";

const UsestateSimple = () => {
 const [num, setNum] = useState(0);

  const increaseNum = () =>{
    setNum(num+1);    
  }

  const decreaseNum = () =>{
      setNum(num-1);
  }

  return (
    <div className="box">
      <h1>{num}</h1>
      <div className="btn">
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      </div>
    </div>
  )
}

export default UsestateSimple

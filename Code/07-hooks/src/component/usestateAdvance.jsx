import { useState } from "react"

const UsestateAdvance = () => {
  const [num, setNum] = useState(10);
  const click = () => {
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
  }
  return (
    <div>
      <h1>{num}</h1>
      <div className="btn">
      <button onClick={click}>Click</button>
      </div>
    </div>
  )
}

export default UsestateAdvance

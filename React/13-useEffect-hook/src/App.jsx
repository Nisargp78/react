import { useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
        console.log('Running...');
      },[num])

      
  return (  
    <div>
      <h1>{num}</h1>
      <h2>{num2}</h2>
      <button onClick={() => {
        setnum(num+1)
      }}>Num</button>
      <button onClick={()=>{
        setnum2(num2+100)
      }}>Num 2</button>
    </div>
  )
}

export default App

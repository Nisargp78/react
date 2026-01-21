import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    setTitle(''); // Clears the input field after submission
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter Your Name'
        value={title} // Controlled input - binds input value to state
        onChange={(e) => {
          setTitle(e.target.value) // Updates state on every input change (two-way binding)
        }}
        />
        <button>Submit</button>
    </form>
    </div>  
  )
}

export default App

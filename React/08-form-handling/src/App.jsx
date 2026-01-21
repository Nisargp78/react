
const App = () => {
  const submitHandler = (e) => {
    console.log("Form Submitted");
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
    </form>
    </div>  
  )
}

export default App

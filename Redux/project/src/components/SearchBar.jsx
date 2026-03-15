import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
  }

  return (
    <div>
      <form className='flex gap-5 p-5 bg-gray-900' onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input 
        value={text} 
        onChange={(e)=>{
          setText(e.target.value)
        }} 
        className='px-5 py-2 border-2 w-full rounded outline-none' 
        type="text"
        placeholder='Enter Something...' 
        required/>
        <button className="px-6 py-2 border-2 rounded outline-none cursor-pointer active:scale-95">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
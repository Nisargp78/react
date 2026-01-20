import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
      <h1>
        Nisarg
      </h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
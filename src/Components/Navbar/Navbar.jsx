import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-Raw Power</div>
    <ul className="nav-menu">
      <li className='menu'>Home</li>
      <li className='menu'>Explore</li>
      <li className='menu'>About</li>
      <li id='nav-contact' className='menu'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar

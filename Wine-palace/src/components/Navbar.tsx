import '../styles/Navbar.css';

function Navbar () {
    return (
        <>
        <nav className='navbar'>
            <div className='container nav-container'>
                <a href='#hreo' className='logo'>Dominique Wine Palace</a>
                <input type='checkbox' id='nav-toggle' className='nav-toggle'></input>
                <label htmlFor= 'nav-toggle' className='hamburger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul className='nav-links'>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#about'>Contact</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
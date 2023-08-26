import { Link } from 'react-router-dom'

const Header = (props) => {
    return <nav className='header'>
        <div className='logo-container'> 
            <Link to='/'>
            <h1>APEFOOD</h1>
            </Link>
        </div>
            <div className='signup'>
             <Link to='user/login'> 
             User login
             </Link>
            </div>
            <div className='signin'>
            <Link to='farmer/login'> 
            Farmer login
            </Link>
            </div>
            
    </nav>
}

export default Header
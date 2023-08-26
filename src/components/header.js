import { Link } from 'react-router-dom'

const Header = (props) => {
    return <nav className='header'>
        <div className='logo-container'> 
            <Link to='/' className='headerlink'>
            <h1>APEFOOD</h1>
            </Link>
        </div>
            <div className='together'>
                <div className='signup' >
                <Link to='user/login' className='headerlink'> 
                User login
                </Link>
                </div>
                <div className='signin'>
                <Link to='farmer/login' className='headerlink'> 
                Farmer login
                </Link>
                </div>
            </div>
        
            
    </nav>
}

export default Header
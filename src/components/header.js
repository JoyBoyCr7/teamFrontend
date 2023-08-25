import { Link } from 'react-router-dom'

const Header = (props) => {
    return <nav className='header'>
        <div className='logo-container'> 
            <Link to='/'>
            <h1>APEFOOD</h1>
            </Link>
        </div>
            <div className='signup'>
             <Link to='farmer/signup'> 
             Farmer Signup
             </Link>
             <label for="cars">Login</label>
            <select id="">
            <option>Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
            </select>
            </div>
    </nav>
}

export default Header
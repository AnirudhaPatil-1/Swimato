import logo from './hungryBites.png'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Title = () => {
    return(
        <a href="/">
            <img className="logo" alt="logo" src={logo} />
        </a>
    )
}

const NavComponent = ()=>{
    return (
        <div className="nav-items">
                <ul>
                    <Link to='./Home'>
                        <li>Home</li>
                    </Link>
                    <Link to='./About'>
                        <li>About</li>
                    </Link>
                    <Link to='./Contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to='./Card'>
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
    )
}

//composing components
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="header">
            <Title/>
            <NavComponent/>
            {isLoggedIn ? 
            (<button 
                className="logout"
                onClick = {() => {setIsLoggedIn(false)}}
            >Logout</button>) : 
            (<button 
            className="Login"
            onClick = {() => {setIsLoggedIn(true)}}
            >Login</button>)}

        </div>
    )
}

export default Header;
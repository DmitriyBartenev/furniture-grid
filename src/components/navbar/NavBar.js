import { Link } from 'react-router-dom';
import hammer from '../../assets/navbar/hammer.svg';
import dashboard from '../../assets/navbar/dashboard.svg';

import './navbar.scss';

const NavBar = () => {

    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <img src = {dashboard} alt = 'dashboard logo' width='30' height = '30'/> 
                    <Link to = '/'>Dashboard</Link>
                </li>
                <li>
                    <img src = {hammer} alt = 'dashboard logo' width='30' height = '30'/> 
                    <Link to = '/planner'>Планировщик</Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default NavBar;
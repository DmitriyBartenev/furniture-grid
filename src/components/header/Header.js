import mainLogo from '../../assets/header/logo.png';

import './header.scss'

const Header = () => {

    return(
        <header className='header'>
            <div className='wrapper'>
                <img src = {mainLogo} alt = 'main logo' width='100' height = '100'/>
                <h1>Choose your own Design</h1>
            </div>
        </header>
    )   
}

export default Header;
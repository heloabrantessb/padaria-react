import './styles.css'
import NavBar from '../NavBar';
import logoPadaria from '../../assets/img/logo.png'

export function Header(){
    return (
        <header>
            <img id="logo" src={logoPadaria} alt="" />
        <NavBar />
        </header>
    )
}

export default Header;
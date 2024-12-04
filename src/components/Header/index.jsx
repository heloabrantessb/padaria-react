import './styles.css'
import NavBar from '../NavBar';
import logoPadaria from '../../assets/img/logo.png'

export function Header(){
    return (
        <div>
        <header>
            <img id="logo" src={logoPadaria} alt="" />
        </header>
        <NavBar />
        </div>
    )
}

export default Header;
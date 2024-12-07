import './styles.css'
import NavBar from '../NavBar';
import logoPadaria from '../../assets/img/logoPadaria.png'

export function Header(){
    return (
        <div>
        <header>
            <img id="logo" src={logoPadaria} alt="" />
            <h1>Padaria do Trigo ao Sonho</h1>
        </header>
        <NavBar />
        </div>
    )
}

export default Header;
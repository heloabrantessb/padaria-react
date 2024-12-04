import './styles.css'
import logoPadaria from '../../assets/img/logo.png'

export function Header(){
    return (
        <header>
            <img id="logo" src={logoPadaria} alt="" />
        </header>
    )
}

export default Header;
import './styles.css'

import Home from '../../pages/Inicio';
import Historia from '../../pages/Historia'
import Galeria from '../../pages/Galeria';
import Contato from '../../pages/Contato'

export function NavBar(){
    return (
        <ul id="menu">
        <li><a href={Home}>Home</a></li>
        <li><a href={Historia}>Historia</a></li>
        <li><a href={Galeria}>Galeria</a></li>
        <li><a href={Contato}>Contato</a></li>
        </ul>
    )
}

export default NavBar;
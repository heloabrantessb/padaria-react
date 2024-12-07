import './styles.css';

import imagemHome from '../../assets/img/imagemInicial.jpg';


export function Home(){
    return (
        <>
            <main>
            <div className="contentHome">
                <img id="bakery" src={imagemHome} alt="" />
                <h1>Bem vindo(a)!</h1>
            </div>
            
            </main>
        </>
    )
}

export default Home;
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import imagemHome from '../../assets/img/bakery.png';

export function Home(){
    return (
        <>
        <Header />
            <main>
            <div className="contentHome">
                <h1>Bem vindo(a) ao nosso site!</h1>
                <img id="bakery" src={imagemHome} alt="" />
            </div>

            </main>
        <Footer />
        </>
    )
}

export default Home;
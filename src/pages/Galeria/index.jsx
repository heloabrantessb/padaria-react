import Header from "../../components/Header";
import Footer from "../../components/Footer";

import fotoCabine from '../../assets/Img/cabine.png';

const Img = () => {
    return <a href={fotoCabine} data-title="Cabine"> <img className="fotos" src={fotoCabine} alt="" /></a>
}


export function Galeria(){
    return (
        <>
            <Header />
            {/*Eu acho que dá pra fazer um loop ou um .map pra gerar as imagens, mas fiz na mão msm*/}
                <Img />
                <Img />
                <Img />
                <Img />
            <Footer />
        </>
    )
}

export default Galeria;
import estilo from './Cabecalho.module.css';
import logo from "../assets/img/logo.png";

// estrutura React para componentes

export function Cabecalho(){
    return(
        //para cada return eu só posso renderizar um único componente
        <header className={estilo.conteiner}>
            <img src={logo} alt="" />
        </header>
        
    )
}
import { Cabecalho} from "../Componentes/Cabecalho";
import { BarraNavegacao } from "../Componentes/BarraNavegacao";
import { Outlet } from "react-router-dom";
import { Footer } from "../Componentes/footer";


// estrutura básica do React

export function Inicial(){
    return(
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Outlet/>
            <Footer/>
        </>
    )
}
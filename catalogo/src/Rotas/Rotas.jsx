import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/inicial";
import { Lista } from "../Componentes/Lista";
import { Perfil } from "../Paginas/Perfil";
import { Serie } from "../Paginas/Serie";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path= 'perfil' element={<Perfil/>}/>
                <Route path= 'serie' element={<Serie/>}/>
            </Route>
        </Routes>
    )
}
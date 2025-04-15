import estilos from './Footer.module.css'
// import pe from "../assets/img/pe.png";


export function Footer(){
    return(
        <nav className={estilos.conteiner}>
            <a href="https://github.com/larissasantos2107">GitHub</a>
                <p>&copy; Desenvolvido por Larissa.</p>
                {/* <img src={pe} alt="" /> */}

        </nav>
            
        
    )
}
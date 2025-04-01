import estilos from './BarraNavegacao.module.css';
//Estrutura do componente

export function BarraNavegacao(){
    // eu só posso retornar 1 componente
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
            
        
    )
}
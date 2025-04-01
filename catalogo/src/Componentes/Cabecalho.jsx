import estilo from './Cabecalho.module.css';

// estrutura React para componentes

export function Cabecalho(){
    return(
        //para cada return eu só posso renderizar um único componente
        <header className={estilo.conteiner}>
            <h1>Hello World</h1>
        </header>
        
    )
}
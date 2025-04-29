import estilos from './Perfil.module.css';
import eu from '../assets/img/eu.jpg';
import rapunzel from '../assets/img/rapunzel.webp';
import sapo from '../assets/img/sapo.webp';
import viva from '../assets/img/viva.jpg';
import { GoPencil } from "react-icons/go";
import { LuMoon } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";


export function Perfil() {
    return (
        <div className={estilos.container}>
            <div className={estilos.perfilWrapper}>
                <img className={estilos.foto} src={eu} alt="Foto de perfil" />
                <div className={estilos.descricao}>
                    <h2 className={estilos.nome}>Larissa Santos</h2>
                    <h3>Perfil ativo</h3>
                </div>
            </div>

            <div className={estilos.filmes}>
                <h3>Filmes favoritos</h3>
                <img className={estilos.foto} src={rapunzel} alt="Foto de perfil" />
                <img className={estilos.foto} src={sapo} alt="Foto de perfil" />
                <img className={estilos.foto} src={viva} alt="Foto de perfil" />
                <img className={estilos.foto} src="https://br.web.img2.acsta.net/pictures/21/10/27/11/49/5430171.jpg" alt="Foto de perfil" />
                <img className={estilos.foto} src="https://m.media-amazon.com/images/I/81DQPNk94RL._AC_UF1000,1000_QL80_.jpg" alt="Foto de perfil" />
                <img className={estilos.foto} src="https://preview.redd.it/ssqo1sjkg8u91.jpg?auto=webp&s=95375c8016f97aaeddc4d66a65316a4abaf94b90" alt="Foto de perfil" />
                <img className={estilos.foto} src="https://br.web.img3.acsta.net/medias/nmedia/18/90/29/80/20109874.jpg" alt="Foto de perfil" />
                <img className={estilos.foto} src="https://br.web.img3.acsta.net/c_310_420/pictures/15/05/20/17/18/336796.jpg" alt="Foto de perfil" />
            </div>

            <div className={estilos.menu}>
                <h1>Ações</h1>
                <div className={estilos.icons}>
                <IoSettingsOutline />
                <GoPencil />
                <LuMoon />
                <FaRegStar />
                </div>
            </div>
        </div>
    );
}

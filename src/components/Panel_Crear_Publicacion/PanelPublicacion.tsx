import './PanelPublicacion.css'

import { FaImages } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
function PanelPublicacion() {
    return (
        <div className="contenedor_sup_panel">
        <div className="contenedor_panel">
            <div className="contenedor_foto_perfil">
                <img src="https://th.bing.com/th/id/OIP.3_9CwQi8OG68ztSfR8YOXwHaHa?rs=1&pid=ImgDetMain" alt="aca ba la pfp" />
            </div>

            <div className="contenedor_formulario">

                <select name="privacidad" id="">
                    <option value="global">Global</option>
                    <option value="amigos">Amigos</option>
                </select>
                <textarea name="texto_publicacion" placeholder='Escribe algo...' cols={50} rows={6} />
                <div className="botones_panel">
                    <div className="botones_panel_edicion">
                        <FaImages color={'#fff'} class='btn'/> <MdEmojiEmotions class='btn' color={'#fff'} />
                    </div>
                    <button>Publicar <IoIosSend class='btn_publicar' /></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PanelPublicacion
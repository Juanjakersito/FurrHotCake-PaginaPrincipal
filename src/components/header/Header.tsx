import { BiWorld } from "react-icons/bi";
import { FaFireAlt, FaSearch } from "react-icons/fa";
import { GiBurningEye, GiHamburgerMenu } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import './Header.css';
import './HeaderResponsiveConfig.css'


function Header() {

  return (
 <header className="header">
  <div className="logo">
    <span>FurrHotCake</span>
  </div>

  <div className="boton_hamburgesa" onClick={()=>{
    let estado=document.querySelector('#barra_de_navegacion')
    
    if(estado?.classList.contains('nav_activa')){
      estado.classList.remove('nav_activa')
    }else{
      estado?.classList.add('nav_activa')
    }
  }}>
    <GiHamburgerMenu color={'white'} size={40}/>
  </div>

  <nav id="barra_de_navegacion">
  <ul>
  <a href="#"><li className="Global"><BiWorld color={'white'} size={30} /> <span>Global</span> </li></a>
    <a href="#"><li className="Tendencias"><FaFireAlt color={'white'} size={30} /><span>Tendencias</span></li></a>
    <a href="#"><li className="Seguidos"><GiBurningEye color={'white'} size={30} /><span>Seguidos</span></li></a>
    <a href="#"><li className="Buscar"><FaSearch color={'white'} size={30} /></li></a>
    <a href="#"><li className="Perfil"><SiDatadog color={'white'} size={35} /><span>Perfil</span></li></a>
  </ul>
  </nav>
  <div className="Contenedor_Usuario">
    <span className="Nombre_de_usuario">JuanPerroVelludo666</span>
    <img src="https://th.bing.com/th/id/OIP.3_9CwQi8OG68ztSfR8YOXwHaHa?rs=1&pid=ImgDetMain" alt="aca ba la pfp" />
  </div>
  
  

 </header>
  )}

export default Header

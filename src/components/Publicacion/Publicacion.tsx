import './Publicacion.css'

function Publicacion() {
  return (
    <div className="contenedor_publicacion">
        <div className="contenedor_foto_perfil">
                <img src="https://th.bing.com/th/id/OIP.3_9CwQi8OG68ztSfR8YOXwHaHa?rs=1&pid=ImgDetMain" alt="aca ba la pfp" />
        </div>

        <div className="contenedor_contenido">
            <div className="info_publicacion">
        <h2 className='usuario_publicacion'>JuanPerroVelludo666</h2>
        <h3 className='fecha_publicacion'>23/Ago/23 12:31</h3>
        </div>
        
        <div className="texto_publicacion">Pinche victor nomas no puede acabar la aplicacion del php, ni siquiera puede corregirla</div>
        </div>
    </div>
  )
}

export default Publicacion
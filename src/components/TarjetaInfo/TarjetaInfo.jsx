import './TarjetaInfo.css';

const TarjetaInfo = (Props) => {
  const { titulo, descripcion, imagen, enlace } = Props;
  return (
    <div className="tarjeta-info">
      <div className="tarjeta-imagen-contenedor">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      </div>

      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>

        {enlace && (
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            <button className="tarjeta-boton">Ver más</button>
          </a>
        )}
      </div>
    </div>
  );
};

export { TarjetaInfo };

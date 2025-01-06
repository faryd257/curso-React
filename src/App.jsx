import { TarjetaInfo } from './components/TarjetaInfo/TarjetaInfo';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <TarjetaInfo
        titulo="Córdoba"
        descripcion="Disfruta de las sierras, naturaleza y actividades al aire libre."
        imagen="https://i.ytimg.com/vi/13EjfxoHN5w/maxresdefault.jpg"
        enlace="https://es.wikipedia.org/wiki/C%C3%B3rdoba_(Argentina)"
      />
      <TarjetaInfo
        titulo="Mendoza"
        descripcion="Vive la experiencia del vino y los paisajes de los Andes."
        imagen="https://www.comparaonline.cl/blog-statics/cl/uploads/2017/02/nicolas-perez-eNWcXCbE5fI-unsplash-scaled.jpg"
        enlace="https://visitmendoza.com"
      />
      <TarjetaInfo
        titulo="San Bernardo"
        descripcion="Relájate en las playas del Atlántico y disfruta de su gastronomía."
        imagen="https://www.guiadecabanias.com/imgs/galerias/postal_3294.jpg"
        enlace="https://visitsanbernardo.com"
      />
    </div>
    
  );
};

export default App;


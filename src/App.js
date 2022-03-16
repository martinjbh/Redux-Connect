import './App.css';
import ShowMovies from './Componentes/ShowMovies/ShowMovies';
import Administrador from './Componentes/Administrador/Administrador';
import ModificarPrecios from './Componentes/ModificarPrecios/ModificarPrecios';
import BorrarMovie from './Componentes/BorrarMovie/BorrarMovie';
function App() {
  return (
    <div className="App">
      <ModificarPrecios />
      <Administrador />
      <BorrarMovie/>
      <ShowMovies />
    </div>
  );
}

export default App;

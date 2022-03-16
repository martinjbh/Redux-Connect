import './App.css';
import ShowMovies from './Componentes/ShowMovies/ShowMovies';
import Administrador from './Componentes/Administrador/Administrador';
import ModificarPrecios from './Componentes/ModificarPrecios/ModificarPrecios';
import BorrarMovie from './Componentes/BorrarMovie/BorrarMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >

          <ModificarPrecios />
          <Administrador />
          <BorrarMovie />
          <ShowMovies />

        </Route>
      </Switch>
    </Router>
  );
}
export default App;

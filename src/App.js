import logo from './logo.svg'
import './App.css'
import Presentation from './presentation/Presentation'
import Selection from './selection/Selection'
import EstadoResultados from './estado_resultados/EstadoResultados'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Presentation/>
        </Route>
        <Route exact path="/selection">
          <Selection/>
        </Route>
        <Route exact path="/resultado">
          <EstadoResultados/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

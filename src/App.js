import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/productos">Productos</Route>
          <Route path="/servicios">Servicios</Route>
          <Route path="/contacto">Contacto</Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;

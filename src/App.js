import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PanelMenuAtas from './Component/PanelMenuAtas';
import MenuAwal from './Component/Router/MenuAwal';
import MenuKreator from './Component/Router/MenuKreator';
import MenuPokemon from './Component/Router/MenuPokemon';


function App() {
  return (
    <>
    <Router>
      <PanelMenuAtas />
        <Switch>
          <Route path='/' exact component={MenuAwal} />
          <Route path='/tentangkami' component={MenuKreator} />
          <Route path='/pokedex' component={MenuPokemon} />
          {/* <Route path='/legendarycards' component={LegendaryCards} /> */}
        </Switch>
    </Router>
    </>
  );
}

export default App;
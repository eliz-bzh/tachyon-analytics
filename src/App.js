import './App.css';
import { Home, Predict } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/predict' component={Predict} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

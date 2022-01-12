import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewData from './components/ViewData';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <ViewData />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
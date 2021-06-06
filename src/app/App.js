
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage, WorkPage } from './pages'
import * as Routes from './routes'

function App() {
  return (
    <div className="app">
      <Router basename={'portfolio-web-site'}>
        <Switch>
            <Route exact path={Routes.WORK}>
                <WorkPage/>
            </Route>
            <Route path={Routes.HOME}>
                <HomePage/>
            </Route>
         
        </Switch>
      </Router>  
    </div>
  );
}

export default App;

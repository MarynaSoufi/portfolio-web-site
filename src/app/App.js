
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { DetailPage, HomePage, WorkPage, NotFoundPage } from './pages'
import * as Routes from './routes'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
            <Route exact path={Routes.WORK}>
                <WorkPage/>
            </Route>
            <Route exact path={Routes.DETAIL}>
                <DetailPage/>
            </Route>
            <Redirect from={Routes.HOME} to={Routes.LANDING}/>
            <Route exact path={Routes.LANDING}>
                <HomePage/>
            </Route>
            <Route>
              <NotFoundPage/>
            </Route>
         
        </Switch>
      </Router>  
    </div>
  );
}

export default App;

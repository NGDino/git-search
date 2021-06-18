//import pages and nav component
import Home from './pages/Home';
import SearchList from './pages/SearchList';
import SingleProject from './pages/SingleProject';
import Nav from './components/Nav';


import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path = '/' component= {Home} />
            <Route exact path = '/search' component= {SearchList} />
            <Route exact path = '/project' component= {SingleProject} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

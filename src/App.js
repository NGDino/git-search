//import pages and nav component
import Home from './pages/Home';
import SearchList from './pages/SearchList';
import SingleProject from './pages/SingleProject';
import Nav from './components/Nav';
import NotFound from './pages/NotFound'


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
            <Route exact path = '/project/:id' component= {SingleProject} />
            <Route path ='*' component= {NotFound}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

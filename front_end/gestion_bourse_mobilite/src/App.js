
import './App.css';
import Login from './auth/login';
import Register from './auth/register';
import Project from './project/project';
import Newproject from './project/new-project'
import {Route,Switch,BrowserRouter as Router,Redirect} from 'react-router-dom'


function App() {
  return (
    <Router>
          
          <Switch>            
            <Route exact path="/"  component={Register}/>
            <Route exact path="/SignIn" component={Login}/>
            <Route exact path="/Project" component={Project}/>
            <Route exact path="/NewProject" component={Newproject}/>          
          </Switch>
     </Router>

  );
}

export default App;

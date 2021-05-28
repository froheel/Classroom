import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Assignments from './pages/Assignments'
import Joinclass from './pages/Joinclass'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Classes' exact component={Classes}/>
        <Route path='/Assignments' exact component={Assignments}/>
        <Route path='/Joinclass' exact component={Joinclass}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

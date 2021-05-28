import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Assignments from './pages/Assignments'
function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Classes' exact component={Classes}/>
        <Route path='/Assignments' exact component={Assignments}/>

      </Switch>
    </Router>
    </>
  );
}

export default App;

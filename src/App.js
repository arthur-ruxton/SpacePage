import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import About from './componentsArt/About';
import Home from './componentsArt/Home';
import Nav from './componentsArt/Nav';
import NotFound from './componentsArt/NotFound';
import SpaceList from './componentsArt/SpaceList';

function App() {
  return (
    <Router>
      <header className='App-header'>
        <h1> Space Page </h1>
        <Nav  />
      </header>
      <main>
        <Switch>
          <Route path='/articles' component={SpaceList} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}


export default App;

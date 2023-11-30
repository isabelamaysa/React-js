import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './componentes/layout/Navbar';
import Footer from './componentes/layout/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
         <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/empresa"> 
           <Empresa />
          </Route>
          <Route path="/contato"> 
            <Contato />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
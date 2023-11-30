import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import {Company} from './components/pages/Company'
import {Contact} from './components/pages/Contact'
import {NewProject} from './components/pages/NewProject'
import { Home } from './components/pages/Home'
import Container from './components/layouts/Container'
import { Navbar } from './components/layouts/Navbar'
import { Footer } from './components/layouts/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min_height" /*Tudo q esta dentro do container vai ficar dentro da div com o props */>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <Footer /> 
    </Router>
  );
}

export default App;

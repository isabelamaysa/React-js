import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Projects } from './components/pages/Projects'
import {Company} from './components/pages/Company'
import {Contact} from './components/pages/Contact'
import {NewProject} from './components/pages/NewProject'
import { Home } from './components/pages/Home'
import { Container } from './components/layouts/Container'
import { Navbar } from './components/layouts/Navbar'
import { Footer } from './components/layouts/Footer'
import { Project } from './components/pages/Project'


export function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min_height" /*Tudo q esta dentro do container vai ficar dentro da div com o props */>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
        </Container>
      </Switch>
      <Footer /> 
    </Router>
  );
}



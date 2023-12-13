import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
      <Container customClass="min_height" /*Tudo q esta dentro do container vai ficar dentro da div com o props */>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer /> 
    </Router>
  );
}
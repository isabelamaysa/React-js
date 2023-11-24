import styles from './App.module.css'
import { Header } from './Header';
import {Tarefas} from './Tarefas'
import './global.css';

function App() {
  return (
    <div>
      <div>
        <header className={styles.cabeçalho}>
          <Header />
        </header>
      </div>
      <div >
        <Tarefas />
      </div>
    </div>
  )
}

export default App

import { PlusCircle} from '@phosphor-icons/react'

import styles from './Tarefas.module.css'

import './global.css'

export function Tarefas() {

    function CriarTarefa(){

    }

    return(
        <div>
            <form onSubmit={CriarTarefa} className={styles.bottomadd}>
                <input className={styles.adicionar} type="text" name="itarefa" id="itarefa" placeholder='Adicione uma nova Tarefa'/>
                    
                <button className={styles.criar}>Criar <PlusCircle/> </button>
            </form>  
        </div>
    )
}

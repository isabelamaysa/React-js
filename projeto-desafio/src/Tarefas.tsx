import { PlusCircle} from '@phosphor-icons/react'
import styles from './Tarefas.module.css'
import './global.css'

import { useState } from 'react'

export function Tarefas() {
    const [list, setList] = useState<string[]>([])

    function addToList(){
        setList(state => [...state, 'nova'])
    }


    return(
        <div>
            <div className={styles.bottomadd}>
                <input className={styles.adicionar} type="text" id="addtarefa" placeholder='Adicione uma nova Tarefa'/>

                <button className={styles.criar} onClick={addToList}>Criar <PlusCircle/> </button>
            </div>   
            
            
            <div className={styles.tarefas}>
                <p>lista de tarefas</p>

                <ul>
                    <input type="radio" name="itens" id="itens" />
                    {list.map(item => <label htmlFor="itens">{item}</label>)}
                    
                </ul>
            </div>

        </div>
    )
}
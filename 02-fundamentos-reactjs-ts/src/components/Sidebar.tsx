import {PencilLine} from '@phosphor-icons/react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
             className={styles.cover} 
             src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/isabelamaysa.png" />

                <strong>Isabela Maysa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} /> 
                    Editar seu Perfil</a>
            </footer>
        </aside>
    )
}
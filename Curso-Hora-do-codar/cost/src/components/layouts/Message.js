import { useState, useEffect } from 'react'

import styles from './Messege.module.css'

export function Message({type, msg}) { /*qnd fica entre parentes aqui, é pq estamos colocando props e podendo escolher separadamento oq vai ser cada um */

    const [visible, setVisible] = useState(false)

    useEffect(() => { //efeito da mensagem
        if (!msg) { //se a msg n exister, n mostra nada
            setVisible(false)
            return
        }

        setVisible(true) //se for verdadeira, se exixtir

        const timer = setTimeout(() => { //ira mostrar por 3s
            setVisible(false) //e depois desaparecerá
        }, 3000)

        return () => clearTimeout(timer) //sempre precisa finalizar com um return, e aqui fala para limpar time
    }, [msg]) //useEffect sempre precisa estar ligado a algo, q no caso é o "msg"

    return (
        <>
            {visible && (
             <div className={`${styles.messege} ${styles[type]}`}>{msg}</div>   
            )}
        </>
    )
} 
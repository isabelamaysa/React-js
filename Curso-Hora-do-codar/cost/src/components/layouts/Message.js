import { useState, useEffect } from 'react'

import styles from './Messege.module.css'

export function Message({type, msg}) { /*qnd fica entre parentes aqui, é pq estamos colocando props e podendo escolher separadamento oq vai ser cada um */

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
             <div className={`${styles.messege} ${styles[type]}`}>{msg}</div>   
            )}
        </>
    )
}
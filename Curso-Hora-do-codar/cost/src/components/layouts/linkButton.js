import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

export function LinkButton({to, text}) {
    return(
        <Link className={styles.bnt} to={to}>
            {text}
        </Link>
    )
}
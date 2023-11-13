import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.tema}>
            <img className={styles.logo} src=".\src\rocket.svg" alt="" />
            <h1 className={styles.to}>to</h1> 
            <h1 className={styles.do}>do</h1>
        </div>
    )
}
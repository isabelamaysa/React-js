import styles from './ProjectForm.module.css'
import Inputs from '../form/Inputs'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export function ProjectForm({btnText}) {
    return(
        <form className={styles.form}>
            <Inputs type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />

            <Inputs type="number" text="Orçamento do projeto" name="name" placeholder="Insira o orçamento total" />

            <Select name="category_id" text="Selecionar a categoria" />

            <SubmitButton text={btnText} />
        </form>
    )
}
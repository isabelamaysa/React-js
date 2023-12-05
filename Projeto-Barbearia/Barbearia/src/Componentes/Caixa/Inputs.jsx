import styles from './Inputs.module.css'

function Inputs ({ type, text, name, placeholder}) {
   
    return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}



export default Inputs 

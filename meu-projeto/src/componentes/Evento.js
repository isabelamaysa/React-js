export function Evento() {

    function meuEvento() {
        console.log("Opá, fui ativado")
    }

    return (
        <div>
            <p>Clique para ativar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
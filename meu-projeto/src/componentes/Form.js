export function Form() {

    function cadastrarUsuario(e) { /*e = event da submissão */
        e.preventDefault() /*Vai parar a execussão do formulario e produzir oq vai seguir q no caso é o "console.log" */
        console.log('Cadastrou o usúario!')
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario} /*Mesma coisa q o onClick, mas qnd for enviado ele vai disparar um evento, mas usado em "form" */>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
import {useLocation} from 'react-router-dom'

import { Message } from "../layouts/Message";

export function Projects() {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return (
        <div>
            <h1>Pagina de Projects!</h1>
            {message && <Message type="success" msg={message}/>} {/*Type define o estilo da mensagem */}
        </div>
    )
}
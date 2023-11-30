import PropTypes from 'prop-types'

export function SayMyName({nome, idade, estado, profissao}) {
    return (
        <div>
            <p>Olá, meu nome é {nome}, tudo bem?</p>
            <p>Eu tenho {idade} anos</p>
            <p>Estou {estado} no momento</p>
            <p>Minha profissão é {profissao}</p>
        </div>
    )
}

SayMyName.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number,
}

SayMyName.defaultProps = {
    nome: 'faltou o nome',
    idade: 0,
    /*Dessa forma, qnd n for adicionado valor a essas props, ira aparecer esses */
}

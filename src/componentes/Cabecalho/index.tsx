import * as Style from './style'

export const Cabecalho = () => {
    return (
        <Style.Cabecalho className="cabecalho">
          <div className="logo" role="img" aria-label='Logo do Sorteador'></div>
          <img className='participante' src='../../imagens/participante.png' alt='Participante' />
        </Style.Cabecalho>
    )
}

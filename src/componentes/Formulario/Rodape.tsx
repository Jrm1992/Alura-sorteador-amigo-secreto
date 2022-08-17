import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../../State/Hook/useListaDeParticipantes"
import * as Styled from './Rodape.style';

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()
    
    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return (
    <Styled.Rodape className="rodape-configuracoes">
        <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </Styled.Rodape>)
}

export default Rodape
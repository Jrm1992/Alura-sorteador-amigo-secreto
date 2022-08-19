import { useListaDeParticipantes } from "../../State/Hook/useListaDeParticipantes"
import * as Styled from './ListaParticipantes.style'

export const ListaParticipantes = () => {

    const participantes: string[] = useListaDeParticipantes()
    return (
        <Styled.Lista>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </Styled.Lista>
    )

}
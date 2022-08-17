import { Cabecalho } from "../Cabecalho"
import Card from "../Card"
import Formulario from "../Formulario/Formulario"
import { ListaParticipantes } from "../Formulario/ListaParticipantes"
import Rodape from "../Formulario/Rodape"
import * as Styled from './Configuracao.style'

export const Configuracao = () => {
    return (
      <>
        <Cabecalho />
        <Card>
            <Styled.Section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </Styled.Section>
        </Card>
      </>
    )
}
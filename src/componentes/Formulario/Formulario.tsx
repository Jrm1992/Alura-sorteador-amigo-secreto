import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../State/Hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../../State/Hook/useMensagemDeErro';
import * as Styled from './style';


const Formulario: React.FC = () => {
  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()
  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
      <Styled.Container>
        <form onSubmit={adicionarParticipante}>
          <input
            ref={inputRef}
            value={nome}
            onChange={ev => setNome(ev.target.value)}
            type="text" 
            placeholder='Insira os nomes dos participantes' 
          />
          <button disabled={!nome} >Adicionar</button>
          {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </form>
      </Styled.Container>

  )
}

export default Formulario;
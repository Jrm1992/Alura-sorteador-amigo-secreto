import React from 'react'
import Formulario from '../Formulario/Formulario';
import * as Styled from './style';

export const PaginaBase = () => {
  return (
    <Styled.Container>
      <Styled.Top>
        <img className='logo' src='../../imagens/logo.png' alt='Logo' />
        <img className='participante' src='../../imagens/participante.png' alt='Participante' />
      </Styled.Top>
      <Styled.Botttom>
        <h2>
          Vamos comecar!
        </h2>
        <Formulario />
      </Styled.Botttom>
    </Styled.Container>
  )
}
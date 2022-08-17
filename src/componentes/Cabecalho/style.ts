import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
  background-color: rgba(75, 105, 253, 1);

  .participante{
    z-index: 1;
  }
  .logo{
    background-image: url("../../imagens/logo.png");
    width: 351px;
    height: 117px;
  }

  @media(max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;

    .logo {
      background-image: url("../../imagens/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }
}
`
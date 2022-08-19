import styled from 'styled-components';

export const Card = styled.div`
  background: #FFF9EB;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 64px 64px 0px 0px;
  padding: 80px;
  display: flex;
  margin-top: -32px;
  justify-content: center;
  min-height: 62vh;
  width: 100%;

  h2{
    text-align: center;
    color: rgba(75, 105, 253, 1);
    font-size: 32px;
  }

  .botao-sortear {
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #FE652B;
    color: #FFF;
    cursor: pointer;
    margin: 16px 0;
  }

  .botao-sortear:disabled {
      opacity: 0.6;
      cursor: not-allowed;
  }

  .botao-sortear:hover {
      background-color: #4B69FD;
  }

  select {
      border-radius: 45px;
      height: 82px;
      width: 70%;
      box-sizing: border-box;
      padding: 0 32px;
      font-size: 20px;
      border: 2px solid black;
      box-shadow: 0px 2px 0px 1px #000000;
  }

  select:focus {
      outline: none;
  }

  p {
      font-size: 20px;
      font-weight: 200;
      margin: 32px 0;
  }

  .resultado{
    color: rgba(254, 101, 43, 0.99);
    font-size: 25px;
  }

  @media screen and (max-width: 800px) {
      select {
          width: 100%;
      }

      .botao-sortear {
          width: 220px;
          margin: 32px 0;
      }
  }
`
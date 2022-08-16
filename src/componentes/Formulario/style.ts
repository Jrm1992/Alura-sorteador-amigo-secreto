import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  input{
    width: 499px;
    height: 80px;
    border: 2px solid black;
    border-radius: 35px 0 0 35px;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
    font-size: 16px;
    padding-left: 109px;
    outline: none;
  }
  input::placeholder{
    color: rgba(0, 0, 0, 0.3);
  }
  button{
    width: 227px;
    height: 80px;
    border: 2px solid black;
    border-radius: 0 35px 35px 0;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
    background: #c4c4c4;
    font-size: 16px;
  }
`
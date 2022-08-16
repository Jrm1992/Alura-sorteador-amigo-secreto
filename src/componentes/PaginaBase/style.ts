import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024;
  height: 1024;
  background: #4B69FD;
  border: 2px solid #000000;
  max-width: 1024px;
`

export const Top = styled.div`
  margin: 0 150px 0 150px;
  height: 367px;
  display: flex;
  align-items: center;
  justify-content: center;

  .participante{
    position: relative;
    top: 78px;
    width: 450px;
    z-index: 5;
  }
  .logo{
    position: relative;
    width: 351px;
  }
`
export const Botttom = styled.div` 
  position: relative;
  height: 657px;
  width: 1024;
  background: #FFF9EB;
  border: 2px solid #000000;
  border-radius: 64px 64px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    margin: 87px 0 36px 0;
    font-size: 32px;
    font-weight: 600;
    color: rgba(75, 105, 253, 1);
  }
`
import styled from 'styled-components';

export const Rodape = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .botao {
        width: 350px;
        height: 80px;
        font-size: 20px;
        box-shadow: 2px 2px 0px 1px #000000;
        border-radius: 45px;
        background-color: #FE652B;
        color: #FFF;
        cursor: pointer;
    }

    .botao:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .botao:hover {
        background-color: #4B69FD;
    }

@media(max-width: 800px) {
    .botao {
        width: 220px;
        margin: 32px 0;
    }
    .rodape-configuracoes {
        flex-direction: column;
    }
    .rodape-configuracoes img {
        margin-top: 32px;
    }
}

`
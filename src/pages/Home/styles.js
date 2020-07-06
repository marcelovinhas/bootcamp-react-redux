import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  /* 3 espaçamentos de grid com largura igual */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; /* distância entre os produtos */
  list-style: none; /* tira as bolinhas de listagem */

  li {
    display: flex;
    flex-direction: column; /* uma informação embaixo da outra */
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      /* > para que a instrução daqui seja apenas dentro do li */
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      /* faz ocupar toda a margem possível para o elemento, se o texto do tênis fosse grande, os botões não ficariam alinhados */
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s; /* demora 0.2 segundos para escurecer e clarear */

      &:hover {
        /* para quando passar o mouse em cima do botão */
        /* darken para escurecer o botão, 0.03 de opacidade e a cor que deseja alterar */
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1); /* preto com 10% de opacidade */

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between; /* alinhar a logo a esquerda e o carrinho a direita */
  align-items: center;
  margin: 50px 0; /* margem em cima e embaixo do header */
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center; /* carrinho fica do lado do texto */
  text-decoration: none; /* tira o underline*/
  transition: opacity 0.2s; /* demora 0.2 segundos para dar a opacidade quando passa o mouse */

  &: hover {
    /* efeito visual quando o usuário passar o mouse */
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

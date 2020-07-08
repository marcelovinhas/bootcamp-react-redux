// estado do redux é imutável, todo reducer vai ser parecido com esse
// switch garante que o reducer de carrinho só ouça a ação ADD_TO_CART
// se não ouvir a ação, deixa o estado como estava, se ouvir pega todo estado atual e adiciona action.product
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product]; // retorna estado modificado
    default:
      return state; // retorna estado anterior sem alteração
  }
}

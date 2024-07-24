// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const itemInCart = state.cart.find(item => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity += product.quantity;
      } else {
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  }
});

export default store;

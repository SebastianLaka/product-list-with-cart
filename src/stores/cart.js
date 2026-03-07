import { ref } from 'vue';
import { defineStore } from 'pinia';
import dataJson from '../assets/data.json';
export const useCartStore = defineStore('cart', () => {
  const productData = dataJson
    const productDataCopy = ref(productData);
  const currentCartItem = ref(0)
  const updateCartAmount = () => currentCartItem.value++;
  const decrementCartAmount = () => currentCartItem.value--;
  
  return { currentCartItem, updateCartAmount, decrementCartAmount }
})

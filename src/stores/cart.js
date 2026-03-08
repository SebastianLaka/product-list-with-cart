import { ref } from 'vue'
import { defineStore } from 'pinia'
import dataJson from '../assets/data.json'
export const useCartStore = defineStore('cart', () => {
  const currentCartItem = ref(0)
  const cartItems = ref([])
  const updateCartAmount = () => {
    currentCartItem.value++
  }
  const decrementCartAmount = (e) => {
    currentCartItem.value--
  }
  return { currentCartItem, updateCartAmount, decrementCartAmount }
})

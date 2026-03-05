import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const currentCartItem = ref(0)
  const updateCartAmount = () => currentCartItem.value++
  
  return { currentCartItem, updateCartAmount }
})

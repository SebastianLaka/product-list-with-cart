import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const currentCartItem = ref(0)
  const cartItems = ref([])
  const updateCartAmount = (product) => {
    currentCartItem.value++;
    const getItem = cartItems.value.find((item) => item.name === product.name)
    if (getItem) {
      getItem.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1})
    }
  }

  const decrementCartAmount = (product) => {
    currentCartItem.value--;
    const getItem = cartItems.value.find((item) => item.name === product.name)
    if (getItem) {
      if (getItem.quantity > 1) {
        getItem.quantity--
      } else {
        removeItem(product.name)
      }
    }
  }
  const removeItem = (productItem) => {
    cartItems.value = cartItems.value.filter((item) => item.name !== productItem)
    currentCartItem.value = cartItems.value.reduce((total, item) => total + item.quantity, 0)
  }
  const sumUpCart = computed(() => {
   return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return {
    currentCartItem,
    cartItems,
    updateCartAmount,
    decrementCartAmount,
    removeItem,
    sumUpCart
  }
})

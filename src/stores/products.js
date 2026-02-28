import { ref } from 'vue'
import { defineStore } from 'pinia'
import dataJson from '../assets/data.json'
export const useProductsStore = defineStore('products', () => {
  const productData = dataJson
  const productDataCopy = ref(productData);
 


  return { productDataCopy }
})

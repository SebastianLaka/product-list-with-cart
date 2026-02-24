import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const productCategory = ref('')
  const setCategory = (name) => productCategory.value = name;

  return { productCategory, setCategory }
})

import { create } from 'zustand'

type CategoryFilterStore = {
  currentCategory: number | null
  setCurrentCategory: (category: number | null) => void
  clear: () => void
}

export const useCategoryFilterStore = create<CategoryFilterStore>()((set) => ({
  currentCategory: null,
  setCurrentCategory: (category) => set({ currentCategory: category }),
  clear: () => set({ currentCategory: null }),
}))

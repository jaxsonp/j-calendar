import { create } from 'zustand'

export const useLayoutStore = create((set) => ({
  leftSidebarCollapsed: true,
  toggleLeftSidebar: () => set((state) => ({ leftSidebarCollapsed: !state.leftSidebarCollapsed })),
  rightSidebarCollapsed: true,
}))
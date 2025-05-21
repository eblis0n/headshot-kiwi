/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-16 14:15:07
 * @LastEditTime: 2025-05-16 14:15:18
 */
import { create } from 'zustand'
import { User, Room, Message } from '@/types'

interface ChatStore {
  currentUser: User | null
  currentRoom: Room | null
  messages: Message[]
  setCurrentUser: (user: User | null) => void
  setCurrentRoom: (room: Room | null) => void
  addMessage: (message: Message) => void
  clearMessages: () => void
  resetStore: () => void
}

export const useStore = create<ChatStore>((set) => ({
  currentUser: null,
  currentRoom: null,
  messages: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
  resetStore: () => set({ currentUser: null, currentRoom: null, messages: [] })
})) 
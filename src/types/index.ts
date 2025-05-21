/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-16 14:14:58
 * @LastEditTime: 2025-05-16 14:15:10
 */
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Message {
  id: string
  content: string
  userId: string
  roomId: string
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Room {
  id: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
  createdBy: string
  messages: Message[]
  participants: User[]
} 
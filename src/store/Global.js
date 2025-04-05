import { persist } from 'zustand/middleware';
import { create } from 'zustand';



export const useUsersStore=create(persist((set)=>({
  users:[],
  setUsers:(payload)=>set(()=>({users:payload})),
  clearUsers:()=>set(()=>({users:[]}))
}),{
  name:'user'
}))

export const useUserStore=create(persist((set)=>({
  user:{},
  setUser:(payload)=>set(()=>({user:payload})),
  clearUser:()=>set(()=>({user:{}}))
}),{
  name:'user'
}))

export const useServiceStore=create(persist((set)=>({
  service:{},
  setService:(payload)=>set(()=>({service:payload})),
  clearService:()=>set(()=>({service:{}}))
}),{
  name:'service'
}))


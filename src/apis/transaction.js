import { useQuery } from "@tanstack/react-query"
import http from "./http"

export const useGetUserTransactions=(email)=>{
    return useQuery({
        queryKey:['transactions',email],
        queryFn:async()=>{
            const res=await http.get(`/transactions/${email}`)
            return res.data
        },
        enabled:!!email,
    })
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import http from "./http"

export const useGetUserTransactions=(email)=>{
    return useQuery({
        queryKey:['transactions',email],
        queryFn:async()=>{
            const res=await http.get(`/transactions/by-email/${email}`)
            return res.data
        },
        enabled:!!email,
    })
}

export const useConfirmTransaction=()=>{
    const queryClient = useQueryClient()
return useMutation({
    mutationFn:async(body)=>{
        const {id, status}=body
        return await http.post(`/transactions/confirm-payment/${id}`,{status})
    },
    onSuccess:(_,{email})=>{
        queryClient.invalidateQueries(['transactions',email])
    }
})
}
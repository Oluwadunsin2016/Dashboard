import { useMutation, useQuery } from "@tanstack/react-query"
import http from "./http"



export const useSignupMutation=()=>{
    return useMutation({
      mutationFn:(body)=>{
        return http.post('/auth/register',body)
      }
    })
  }

export const useLoginMutation=()=>{
    return useMutation({
      mutationFn:(body)=>{
        return http.post('/auth/login',body)
      }
    })
  }

  export const useGetProfile = () => {
    return useQuery({
      queryKey: ["profile"],
      queryFn: () => {
        console.log('Called');
        
        return http.get("/auth/profile");
      },
    });
  };
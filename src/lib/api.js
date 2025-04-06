import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { users } from "./data";
import http from "../apis/http";

export const useGetAllUsers = (service) => {
    return useQuery({
      queryKey: ["allUsers",service], // Query key should be an array
      queryFn: async () => {
        if (service=='monicard') {
            const res = await axios.get("http://localhost:5000/api/user/all");
            return res.data;     
        }
        else if (service=='africana') {
            const res = await http.get("/user/all");
            console.log(res.data?.users);
            
            return res.data?.users;     
        }
        else{
            return users
        }
      },
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes (optional)
    });
  };

  export const useCreateInvestment = () => {
return useMutation({
mutationFn: async (data) => {
    // const res = await axios.post('http://localhost:5000/api/investment/create', data, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   });
    const res = await axios.post('https://dashboard-backend-hazel-five.vercel.app/api/investment/create', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    return res.data;
}
})
  }
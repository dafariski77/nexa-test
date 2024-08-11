import { axiosLocal } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      return await axiosLocal.get("/customer");
    },
  });
};

export const useCreateCustomer = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async ({ body }) => {
      return await axiosLocal.post("/customer", body);
    },
    onSuccess,
    onError,
  });
};

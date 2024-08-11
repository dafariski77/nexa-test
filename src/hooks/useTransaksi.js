import { axiosLocal } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTransaksi = () => {
  return useQuery({
    queryKey: ["transaksi"],
    queryFn: async () => {
      return await axiosLocal.get("/transaksi");
    },
  });
};

export const useGetOneTransaksi = ({ idTransaksi }) => {
  return useQuery({
    queryKey: [`transaksi-${idTransaksi}`],
    queryFn: async () => {
      return await axiosLocal.get(`/transaksi/${idTransaksi}`);
    },
  });
};

export const useCreateTransaksi = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async ({ body }) => {
      return await axiosLocal.post("/transaksi", body);
    },
    onSuccess,
    onError,
  });
};

export const useUpdateTransaksi = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async ({ body, idTransaksi }) => {
      return await axiosLocal.put(`/transaksi/${idTransaksi}`, body);
    },
    onSuccess,
    onError,
  });
};

export const useDeleteTransaksi = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async ({ idTransaksi }) => {
      return await axiosLocal.delete(`/transaksi/${idTransaksi}`);
    },
    onSuccess,
    onError,
  });
};

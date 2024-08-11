import { axiosLocal } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetBarang = () => {
  return useQuery({
    queryKey: ["barang"],
    queryFn: async () => {
      return await axiosLocal.get("/barang");
    },
  });
};

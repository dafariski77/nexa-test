import { axiosLocal } from "@/lib/axios";

const getCounter = async (year, month) => {
  const res = await axiosLocal.get(`/counter?year=${year}&month=${month}`);

  return res.data?.data?.counter;
};
export default getCounter;

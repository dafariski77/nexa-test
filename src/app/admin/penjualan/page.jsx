"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import DataTable from "./data-table";
import { columns } from "./columns";
import { useDeleteTransaksi, useGetTransaksi } from "@/hooks/useTransaksi";
import { DatePicker } from "@/components/custom/date-picker";
import { useToast } from "@/components/ui/use-toast";

export default function PenjualanPage() {
  const { toast } = useToast();

  const { data: dataTransaksi, isLoading, refetch } = useGetTransaksi();

  const formattedData = dataTransaksi?.data?.data.map((item) => ({
    ...item,
    nama: item.customer.nama,
  }));

  const { mutate } = useDeleteTransaksi({
    onSuccess: () => {
      refetch();

      toast({
        title: "Data berhasil dihapus",
      });
    },
    onError: () => {
      toast({
        title: "Somthing error!",
        variant: "destructive",
      });
    },
  });

  return (
    <React.Fragment>
      <h1 className="font-bold text-2xl">TRANSAKSI PENJUALAN</h1>
      <div className="mt-6">
        <p className="font-bold">Filter Tanggal Transaksi</p>
        <div className="flex flex-row gap-4 justify-between mt-2 items-center">
          <div className="flex flex-row items-center gap-4">
            <DatePicker />
            <p className="font-bold">sd</p>
            <DatePicker />
            <Button>
              <HiFilter className="text-lg" />
            </Button>
          </div>
          <Link href={"/admin/transaksi/create"}>
            <Button>
              <BiPlusCircle className="text-lg me-2" />
              Tambah Transaksi
            </Button>
          </Link>
        </div>
        <div className="mt-6">
          <DataTable
            columns={columns}
            data={formattedData}
            isLoading={isLoading}
            editPath={"/admin/transaksi/edit"}
            actionDelete={mutate}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

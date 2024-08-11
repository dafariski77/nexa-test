"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoIosSave } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { DatePicker } from "@/components/custom/date-picker";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { useGetBarang } from "@/hooks/useBarang";
import { useGetCustomers } from "@/hooks/useCustomer";
import getCounter from "@/utils/getCounter";
import { useToast } from "@/components/ui/use-toast";
import { useCreateTransaksi } from "@/hooks/useTransaksi";
import { useRouter } from "next/navigation";

export default function CreateTransaksiPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [barang, setBarang] = useState([]);
  const [counter, setCounter] = useState({
    tahun: "",
    bulan: "",
  });
  const [nomorTransaksi, setNomorTransaksi] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState(new Date());
  const [editIndex, setEditIndex] = useState(null);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [customer, setCustomer] = useState({
    id: "",
    nama: "",
    alamat: "",
    phone: "",
  });
  const formBarang = useForm({
    defaultValues: {
      kodeBarang: "",
      namaBarang: "",
      qty: "",
      subtotal: "",
    },
  });

  const { data: dataBarang, isLoading: isLoadingBarang } = useGetBarang();
  const { data: dataCustomer, isLoading: isLoadingCustomer } =
    useGetCustomers();

  const onSubmitBarang = (data) => {
    setBarang((prevBarang) => [...prevBarang, data]);

    formBarang.reset();
  };

  const handleDataCustomer = (val) => {
    if (val == "new") {
      setIsNewCustomer(true);
    } else {
      setIsNewCustomer(false);
      setCustomer({
        id: val,
      });
    }
  };

  const handleChangeCustomer = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleNamaBarangChange = (namaBarang) => {
    const selectedBarang = dataBarang?.data?.response.find(
      (item) => item.nama_barang === namaBarang
    );

    if (selectedBarang) {
      formBarang.setValue("namaBarang", namaBarang);
      formBarang.setValue("kodeBarang", selectedBarang.kd_barang);
    }
  };

  const handleDeleteBarang = (index) => {
    setBarang((prevBarang) => prevBarang.filter((_, i) => i !== index));
  };

  const handleEdit = (data, index) => {
    setEditIndex(index);
    formBarang.setValue("namaBarang", data.namaBarang);
    formBarang.setValue("qty", data.qty);
    formBarang.setValue("subtotal", data.subtotal);
  };

  const handleUpdateBarang = () => {
    setBarang((prevBarang) =>
      prevBarang.map((item, i) =>
        i === editIndex ? formBarang.getValues() : item
      )
    );
    setEditIndex(null);

    formBarang.reset();
  };

  useEffect(() => {
    const handleCounter = async () => {
      const year = tanggalTransaksi.getFullYear();
      const month = String(tanggalTransaksi.getMonth() + 1).padStart(2, "0");

      setCounter({
        bulan: month,
        tahun: year,
      });

      let currentCounter = await getCounter(year, month);

      const newCounter = currentCounter + 1;

      const nomorTransaksi = `SO/${year}-${month}/${String(newCounter).padStart(
        4,
        "0"
      )}`;

      setNomorTransaksi(nomorTransaksi);
    };

    handleCounter();
  }, [tanggalTransaksi]);

  const handleChangeTanggal = (val) => {
    setTanggalTransaksi(val);
  };

  const totalTransaksi = barang.reduce((acc, item) => {
    return acc + parseFloat(item.subtotal);
  }, 0);

  const { mutate } = useCreateTransaksi({
    onError: () => {
      toast({
        title: "Something Error",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Data berhasil disimpan!",
      });

      router.push("/admin/penjualan");
    },
  });

  const onSubmitTransaksi = () => {
    const body = {
      counter,
      nomorTransaksi,
      tanggalTransaksi,
      totalTransaksi,
      customer,
      barang,
    };

    mutate({ body });
  };

  return (
    <React.Fragment>
      <span className="flex flex-row items-center gap-4">
        <Link href={"/admin/penjualan"}>
          <FaChevronLeft className="text-lg" />
        </Link>
        <h1 className="font-bold text-2xl">FORM TRANSAKSI</h1>
      </span>
      <div className="my-6">
        <p className="font-bold">Nomor Transaksi</p>
        <p>{nomorTransaksi}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold mb-2">Tanggal Transaksi</p>
        <DatePicker
          date={tanggalTransaksi}
          handleSelect={handleChangeTanggal}
        />
      </div>
      <hr className="my-7 border-b" />
      <div className="">
        <p className="font-bold mb-2">Pilih Customer</p>
        <Select
          onValueChange={(val) => handleDataCustomer(val)}
          value={customer.id}
        >
          <SelectTrigger className="w-52">
            <SelectValue placeholder="Option Customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {dataCustomer?.data?.data?.map((list, i) => (
                <SelectItem value={list.id} key={i}>
                  {list.nama}
                </SelectItem>
              ))}
              <SelectItem value={"new"} className="font-bold">
                Add New Customer
              </SelectItem>
              {isLoadingCustomer && (
                <SelectItem value={"loading"}>Loading...</SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        {isNewCustomer && (
          <>
            <p className="font-bold mt-6">Data Customer</p>
            <div className="flex flex-row gap-4 mt-2">
              <Input
                placeholder="Nama"
                name="nama"
                className="w-52"
                onChange={handleChangeCustomer}
              />
              <Input
                placeholder="Alamat"
                name="alamat"
                className="w-52"
                onChange={handleChangeCustomer}
              />
              <Input
                placeholder="Phone"
                name="phone"
                className="w-52"
                onChange={handleChangeCustomer}
              />
            </div>
          </>
        )}
      </div>
      <hr className="my-7 border-b" />
      <p className="font-bold">Pilih Barang</p>
      <div className="">
        <Form {...formBarang}>
          <form
            onSubmit={formBarang.handleSubmit(onSubmitBarang)}
            className="flex flex-row gap-4 mt-2"
          >
            <FormField
              control={formBarang.control}
              name="namaBarang"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(val) => handleNamaBarangChange(val)}
                    value={formBarang.getValues("namaBarang")}
                  >
                    <SelectTrigger className="w-52">
                      <SelectValue placeholder="Option Barang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {dataBarang?.data?.response?.map((list, i) => (
                          <SelectItem value={list.nama_barang} key={i}>
                            {list.nama_barang}
                          </SelectItem>
                        ))}
                        {isLoadingBarang && (
                          <SelectItem value={"loading"}>Loading...</SelectItem>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={formBarang.control}
              name="qty"
              render={({ field }) => (
                <FormItem>
                  <Input
                    placeholder="Qty"
                    type="number"
                    className="w-52"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={formBarang.control}
              name="subtotal"
              render={({ field }) => (
                <FormItem>
                  <Input
                    placeholder="Subtotal"
                    type="number"
                    className="w-52"
                    {...field}
                  />
                </FormItem>
              )}
            />

            {editIndex === null ? (
              <Button type="submit">Tambah Barang</Button>
            ) : (
              <>
                <Button type="button" onClick={() => handleUpdateBarang()}>
                  Update
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    formBarang.reset();
                    setEditIndex(null);
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </form>
        </Form>
      </div>
      <p className="font-bold mt-6">Data Barang</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-28">No</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {barang.map((barang, i) => (
            <TableRow key={i + 1}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{barang.namaBarang}</TableCell>
              <TableCell>{barang.qty}</TableCell>
              <TableCell>{barang.subtotal}</TableCell>
              <TableCell>
                <span
                  onClick={() => handleEdit(barang, i)}
                  className="cursor-pointer"
                >
                  Edit
                </span>{" "}
                |{" "}
                <span
                  onClick={() => handleDeleteBarang(i)}
                  className="cursor-pointer"
                >
                  Hapus
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="font-bold text-xl my-8">
        Total Transaksi : Rp {totalTransaksi.toLocaleString("id-ID")}
      </p>
      <Button onClick={() => onSubmitTransaksi()}>
        <IoIosSave className="me-2 text-lg" />
        Simpan Transaksi
      </Button>
    </React.Fragment>
  );
}

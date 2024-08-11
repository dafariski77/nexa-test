"use client";

import Spinner from "@/components/custom/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { PiFileXlsFill } from "react-icons/pi";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import exportToExcel from "@/utils/exportToExcel";

export default function DataTable({
  columns,
  data,
  withAction = true,
  editPath = true,
  actionDelete = true,
  isLoading = false,
}) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    enableGlobalFilter: true,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      globalFilter,
      sorting,
    },
  });

  const handleEdit = (dataId) => {
    router.push(`${editPath}/${dataId}`);
  };

  const sumTotalTransaksi = data?.reduce(
    (total, transaksi) => total + transaksi.totalTransaksi,
    0
  );

  return (
    <>
      <div className="flex items-center flex-row justify-between py-4">
        <Input
          placeholder="Search data..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <Button
          onClick={() => exportToExcel("Transaksi", "Transaksi Report", data)}
        >
          <PiFileXlsFill className="text-lg me-2" />
          Export Excel
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <TableHead>No</TableHead>
                {headerGroup.headers.map((header) => {
                  return (
                    <React.Fragment key={header.id}>
                      <TableHead>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    </React.Fragment>
                  );
                })}
                {withAction && <TableHead>Action</TableHead>}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={withAction ? columns.length + 2 : columns.length + 1}
                  className="h-24 text-center w-full"
                >
                  <div className="flex justify-center items-center">
                    <Spinner />
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  <TableCell>{index + 1}</TableCell>
                  {row.getVisibleCells().map((cell, i) => (
                    <React.Fragment key={cell.id}>
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    </React.Fragment>
                  ))}
                  {withAction && (editPath || actionDelete) && (
                    <TableCell>
                      {editPath && (
                        <span
                          onClick={() => handleEdit(row.original.id)}
                          className="cursor-pointer"
                        >
                          Edit
                        </span>
                      )}
                      {editPath && actionDelete && (
                        <span className="mx-1">|</span>
                      )}
                      {actionDelete && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <span className="cursor-pointer">Delete</span>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  actionDelete({ idTransaksi: row.original.id })
                                }
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={withAction ? columns.length + 2 : columns.length + 1}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell>Total</TableCell>
              <TableCell colSpan={2}>{sumTotalTransaksi}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}

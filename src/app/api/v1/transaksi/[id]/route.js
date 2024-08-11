import prisma from "@/lib/prisma";
import { apiError, apiSuccess } from "@/utils/apiResponse";

export async function GET(request, { params }) {
  try {
    const idTransaksi = params.id;

    const transaksi = await prisma.transaksi.findFirst({
      where: {
        id: parseInt(idTransaksi),
      },
      include: {
        customer: true,
        transaksiDetail: true,
      },
    });

    return apiSuccess(transaksi);
  } catch (error) {
    return apiError();
  }
}

export async function PUT(request, { params }) {
  try {
    const idTransaksi = params.id;
    const {
      nomorTransaksi,
      tanggalTransaksi,
      totalTransaksi,
      customer,
      barang,
      counter,
    } = await request.json();

    // Using transaction
    await prisma.$transaction(async (prisma) => {
      let currentCustomer;

      if (customer.id) {
        currentCustomer = await prisma.customer.findFirst({
          where: {
            id: customer.id,
          },
        });
      } else {
        currentCustomer = await prisma.customer.create({
          data: {
            nama: customer.nama,
            alamat: customer.alamat,
            phone: customer.phone,
          },
        });
      }

      // Update the transaksi
      const transaksi = await prisma.transaksi.update({
        where: { id: parseInt(idTransaksi) },
        data: {
          idCustomer: currentCustomer.id,
          nomorTransaksi,
          tanggalTransaksi,
          totalTransaksi,
        },
      });

      // Delete existing transaction details associated with the transaksi
      await prisma.transaksiDetail.deleteMany({
        where: { idTransaksi: parseInt(idTransaksi) },
      });

      // Create new transaction details
      const dataBarang = barang.map((item) => ({
        ...item,
        qty: parseInt(item.qty),
        subtotal: parseInt(item.subtotal),
        idTransaksi: transaksi.id,
      }));

      await prisma.transaksiDetail.createMany({
        data: dataBarang,
      });

      // Update the counter if needed
      const currentCounter = await prisma.counter.findFirst({
        where: {
          tahun: parseInt(counter.tahun),
          AND: {
            bulan: parseInt(counter.bulan),
          },
        },
      });

      const newCounter = currentCounter ? currentCounter.counter + 1 : 1;

      if (currentCounter) {
        await prisma.counter.update({
          where: {
            id: currentCounter.id,
          },
          data: {
            counter: newCounter,
          },
        });
      } else {
        await prisma.counter.create({
          data: {
            tahun: parseInt(counter.tahun),
            bulan: parseInt(counter.bulan),
            counter: newCounter,
          },
        });
      }
    });

    return apiSuccess();
  } catch (error) {
    console.error(error);
    return apiError();
  }
}

export async function DELETE(request, { params }) {
  try {
    const idTransaksi = params.id;

    await prisma.transaksi.delete({
      where: {
        id: parseInt(idTransaksi),
      },
    });

    return apiSuccess();
  } catch (error) {
    console.log(error);
    return apiError();
  }
}

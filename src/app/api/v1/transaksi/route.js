import prisma from "@/lib/prisma";
import { apiError, apiSuccess } from "@/utils/apiResponse";

export async function GET(request) {
  try {
    const transaksi = await prisma.transaksi.findMany({
      include: {
        customer: true,
        transaksiDetail: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return apiSuccess(transaksi);
  } catch (error) {
    console.log(error);
    return apiError();
  }
}

export async function POST(request) {
  try {
    const {
      nomorTransaksi,
      tanggalTransaksi,
      totalTransaksi,
      customer,
      barang,
      counter,
    } = await request.json();

    // Menggunakan transaction
    // Prisma secara otomatis menerapkan rollback dan commit
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

      const transaksi = await prisma.transaksi.create({
        data: {
          idCustomer: currentCustomer.id,
          nomorTransaksi,
          tanggalTransaksi,
          totalTransaksi,
        },
      });

      const dataBarang = barang.map((item) => ({
        ...item,
        qty: parseInt(item.qty),
        subtotal: parseInt(item.subtotal),
        idTransaksi: transaksi.id,
      }));

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

      await prisma.transaksiDetail.createMany({
        data: dataBarang,
      });
    });

    return apiSuccess();
  } catch (error) {
    console.log(error);
    return apiError();
  }
}

import prisma from "@/lib/prisma";
import { apiError, apiSuccess } from "@/utils/apiResponse";

export async function GET(request) {
  try {
    const customers = await prisma.customer.findMany();

    return apiSuccess(customers);
  } catch (error) {
    return apiError();
  }
}

export async function POST(request) {
  try {
    const { nama, alamat, phone } = request.json();

    await prisma.customer.create({
      data: {
        nama,
        alamat,
        phone,
      },
    });

    return apiSuccess();
  } catch (error) {
    console.log(error);
    return apiError();
  }
}

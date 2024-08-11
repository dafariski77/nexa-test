import prisma from "@/lib/prisma";
import { apiSuccess } from "@/utils/apiResponse";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const year = searchParams.get("year");
  const month = searchParams.get("month");

  let counter = await prisma.counter.findFirst({
    where: {
      bulan: parseInt(month),
      AND: {
        tahun: parseInt(year),
      },
    },
  });

  if (!counter) {
    counter = await prisma.counter.create({
      data: {
        bulan: parseInt(month),
        tahun: parseInt(year),
        counter: 0,
      },
    });
  }

  return apiSuccess({ counter: counter.counter });
}

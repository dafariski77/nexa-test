import { axiosInstance } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const barang = await axiosInstance.post(
    "/main/list_barang",
    {},
    {
      headers: {
        Accept: "application/json",
        "Client-Service": "gmedia-recruitment",
        "Auth-Key": "demo-admin",
        "User-Id": "1",
        Token:
          "8godoajVqNNOFz21npycK6iofUgFXl1kluEJt/WYFts9C8IZqUOf7rOXCe0m4f9B",
        Cookie: "ci_session=3pr2fpbuh79cvvsf2bhut398f7604dck",
      },
    }
  );

  const res = barang.data;

  return NextResponse.json(res, {
    status: 200,
  });
}

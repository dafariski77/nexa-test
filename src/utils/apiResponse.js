import { NextResponse } from "next/server";

export const apiSuccess = (data = null, code = 200) => {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    {
      status: code,
    }
  );
};

export const apiError = (message = "Internal Server error", code = 500) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    {
      status: code,
    }
  );
};

import { NextResponse } from "next/server";

export async function POST(request) {
  const contentType = await request.headers.get("content-type");
  if (contentType !== "application/json") {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }
  const data = await request.json();
  return NextResponse.json(data, { status: 201 });
}

import { NextResponse } from "next/server";

export default async function GET(req, res) {
  const { params } = context;
  const { slug } = params;
  console.log(req, context);
  return NextResponse.json({ slug });
}

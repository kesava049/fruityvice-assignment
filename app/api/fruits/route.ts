import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "api/fruit/all";

  const res = await fetch(`https://www.fruityvice.com/${path}`);
  const data = await res.json();

  return NextResponse.json(data);
}
import { NextResponse } from "next/server";
import { mockColleges } from "@/data/mockColleges";

export async function GET() {
  return NextResponse.json(mockColleges);
}
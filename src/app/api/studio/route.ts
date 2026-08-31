import { NextResponse } from "next/server";
import { getStudioMachineData } from "@/lib/studio-machine-data";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(getStudioMachineData(), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}

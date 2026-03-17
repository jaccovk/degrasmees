import { NextRequest } from "next/server"
import { revalidate } from "@/lib/api/revalidate"

export async function POST(req: NextRequest) {
  return revalidate(req)
}

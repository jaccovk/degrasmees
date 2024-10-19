import { NextRequest } from "next/server"
import revalidate from "@/utils/api/revalidate"

export async function POST(req: NextRequest) {
  return revalidate(req)
}

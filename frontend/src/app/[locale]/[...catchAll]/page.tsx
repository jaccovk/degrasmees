import { notFound } from "next/navigation"

// Deze pagina vangt ALLE urls op die nergens anders matchen binnen /[locale]/...
export default function CatchAllPage() {
  // We roepen direct notFound() aan, wat Next.js vertelt om jouw
  // app/[locale]/not-found.tsx (van Stap 2) te tonen!
  notFound()
}

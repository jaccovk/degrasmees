import Custom404 from "@/components/error-pages/Custom404"
import { INextPageProps } from "@/Interfaces/strapi-types/next.interface"

export default async function NotFound(props: INextPageProps) {
  return <Custom404 props={props} />
}

"use client"

import { SWRConfig } from "swr"
import { fetchAPI } from "@/utils/fetch-api"

export default function Config(props: any) {
  const { children } = props

  return (
    <SWRConfig
      value={{
        fetcher: ({ path, urlParamsObject, options }) =>
          fetchAPI({ path, urlParamsObject, options }),
        revalidateOnMount: true,
        // refreshInterval: 1000,
      }}
    >
      {children}
    </SWRConfig>
  )
}

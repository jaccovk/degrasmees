"use client"

import {SWRConfig} from "swr";
import {ThemeProvider} from "@/Contexts/theme.context";
import {fetchAPI} from "@/utils/fetch-api";
import {GlobalProvider} from "@/Contexts/global.context";

export default function Config(props: any) {
  const {children} = props;

  return (
    <ThemeProvider>
      <GlobalProvider>
        <SWRConfig value={{
          fetcher: ({path, urlParamsObject, options}) =>
            fetchAPI({path, urlParamsObject, options}),
          revalidateOnMount: true,
          // refreshInterval: 1000,
        }}>
          {children}
        </SWRConfig>
      </GlobalProvider>
    </ThemeProvider>
  )
}

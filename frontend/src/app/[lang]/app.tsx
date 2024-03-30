"use client";

import Navbar from "@/components/global/Navigation/Navbar";
import Footer from "@/components/global/Footer/Footer";
import React, {useCallback, useEffect} from "react";
import {useGlobalContext} from "@/Contexts/global.context";
import useGlobal from "@/Hooks/useGlobal.hook";
import useDarkMode from "@/Hooks/useDarkMode.hook";
import useTheme from "@/Hooks/useTheme";
import Head from "next/head";
import {getStrapiMedia} from "@/utils/api-helpers";
import useColors from "@/Hooks/useColors.hook";

interface AppProps {
    params: {
        slug: string;
        lang: string;
    };
    children: React.ReactNode;
}

export default function App({params, children}: AppProps) {
  /**
   * Set global context
   *
   */
  const { setGlobal } = useGlobalContext();
  const { colorTheme, setTheme } = useDarkMode();

  const {data: globalData, error: globalError} = useGlobal({lang: params.lang});
  const {data: themeData, error: themeError} = useTheme();
  /**
   * Callbacks
   *
   */
  const fetchData = useCallback((data: any, error: any, set: any) => {
    if (data) set(data);
    if (error) window && window.location.replace("/404");
  }, []);
  /**
   * Effects
   *
   */
  useColors(themeData?.colors);
  useEffect(() => {
    fetchData(globalData, globalError, setGlobal);
  }, [setGlobal, globalError, globalData, fetchData]);

  useEffect(() => {
    fetchData(themeData, themeError, setTheme);
  }, [setTheme, themeError, themeData, fetchData]);

  const favicon = globalData?.personaldata?.favicon
  return (
    <>
      <main className={colorTheme}>
        <Head>
          {favicon?.data?.attributes?.url ? (
            <link
              rel="shortcut icon"
              href={getStrapiMedia(favicon?.data?.attributes.url)}
            />
          ) : null}
        </Head>
        <Navbar/>
        {children}
        <Footer/>
      </main>
    </>
  )
}

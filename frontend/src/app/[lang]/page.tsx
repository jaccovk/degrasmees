"use client";

import usePage from "@/Hooks/usePage.hook";
import {sectionRenderer} from "@/utils/section-renderer";
import React, {useEffect} from "react";
import {NextSeo} from "next-seo";
import Script from "next/script";
import useOverlay from "@/Hooks/useOverlay.hook";
import Custom404 from "@/components/ErrorPages/Custom404";

interface HomeProps {
  params: {
    lang: string;
  };
}

export default function Home({params}: HomeProps) {
  const {data: home, error} = usePage({slug: "home", lang: params.lang})
  useOverlay(home?.useOverlay || false);
  const sections = home?.sections || [];

  useEffect(() => {
    document.title = home?.title || "Home"
  }, [home]);
  if (error) window.alert(error.message);

  const metaText = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: home?.meta?.metaTitle || "",
    description: home?.meta?.metaDescription || "",
  };

  if (!home) return <Custom404 params={params}/>;

  return (
    <div className="sections">
      {home?.meta && <Script id={"meta-schema"} type={"application/ld+json"}>{JSON.stringify(metaText)}</Script>}
      <NextSeo title={home?.meta?.metaTitle || ""} description={home?.meta?.metaDescription || ""}/>
      {sections?.map((section: any, index: number) => sectionRenderer(section, params.lang, index))}
    </div>);
}

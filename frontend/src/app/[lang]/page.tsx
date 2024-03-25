"use client";

import usePage from "@/Hooks/usePage.hook";
import {sectionRenderer} from "@/utils/section-renderer";
import {useEffect} from "react";
import {NextSeo} from "next-seo";
import Script from "next/script";
import {useGlobalContext} from "@/Contexts/global.context";
import {getStrapiURL} from "@/utils/api-helpers";
import useOverlay from "@/Hooks/useOverlay.hook";

interface HomeProps {
    params: {
        lang: string;
    };
}

export default function Home({params}: HomeProps) {
  const {data: home, error} = usePage({slug: "home", lang: params.lang})
  useOverlay(home?.useOverlay || false);
  const { global } = useGlobalContext();
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: global?.personaldata?.fullName || "",
    image: getStrapiURL(global?.personaldata?.favicon?.data?.attributes?.url) || "",
    sameAs: "https://jaapvankooten.nl/nl"
  }

  return (
    <div className="sections">
      {home?.meta && <Script id={"meta-schema"} type={"application/ld+json"}>{JSON.stringify(metaText)}</Script>}
      {global?.personaldata &&  <Script id={"person-schema"} type={"application/ld+json"}>{JSON.stringify(schema)}</Script>}
      <NextSeo title={home?.meta?.metaTitle || ""} description={home?.meta?.metaDescription || ""}/>
      {sections?.map((section: any, index: number) => sectionRenderer(section, params.lang, index))}
    </div>);
}

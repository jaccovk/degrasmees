"use client";

import usePage from "@/Hooks/usePage.hook";
import {sectionRenderer} from "@/utils/section-renderer";
import React from "react";
import {useGlobalContext} from "@/Contexts/global.context";
import {NextSeo} from "next-seo";
import Custom404 from "@/components/ErrorPages/Custom404";
import useOverlay from "@/Hooks/useOverlay.hook";

interface Props {
  params: {
    slug: string;
    lang: string;
  };
}

export default function Page({params}: Props) {
  const {slug} = params;
  const {global} = useGlobalContext();
  const {data: page, error} = usePage({slug, lang: params.lang});
  useOverlay(page?.useOverlay || false);

  if (!page) return <Custom404 params={params}/>;
  if (error) window.alert(error.message);

  const {title, meta, sections} = page || {};
  const fullName = global?.personaldata?.fullName || "";

  if (document) document.title = title || fullName

  return (
    <div className="sections">
      <NextSeo title={meta?.metaTitle || ""} description={meta?.metaDescription || ""}/>
      {sections?.map((section: any, index: number) => sectionRenderer(section, params.lang, index))}
    </div>
  );
}

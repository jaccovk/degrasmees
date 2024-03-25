import React from "react";

interface Props {
    children: React.ReactNode;
    params: {
        slug: string;
        lang: string;
    };
}

export default function Layout({params, children}: Props) {
  return <>{children}</>;
}

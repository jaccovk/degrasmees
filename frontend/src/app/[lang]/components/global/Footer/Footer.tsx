"use client"
import styles from "@/styles/global/Footer.module.scss"
import { LinkProps, SocialLinkProps } from "@/Interfaces/strapi-components/link.interface"
import React from "react"
import CustomLink from "@/components/links/CustomLink"
import { useGlobalContext } from "@/Contexts/global.context"

import NextMedia from "@/components/global/Media/NextMedia"
import { Parts } from "@/Interfaces/api.interface"

export default function Footer() {
  const { global } = useGlobalContext()

  const logo = global.navigation?.logoFooter?.data || ({} as Parts)
  const links: LinkProps[] = global.navigation?.links || ([] as LinkProps[])
  const socialLinks: SocialLinkProps[] =
    global?.navigation?.socialLinks || ([] as SocialLinkProps[])

  return (
    <footer className={styles.block}>
      <div className={styles.content}>
        <div className={styles.logo}>
          {logo && <NextMedia media={logo} width={50} height={50} isLink />}
        </div>
      </div>
      <hr />
      <div className={styles.practical_info}>
        <span>©{new Date().getFullYear()} All rights reserved</span>
        <div className={styles.social_links}>
          {socialLinks &&
            socialLinks.map((link: SocialLinkProps) => {
              return (
                <a href={link.url} key={link.id}>
                  <NextMedia media={link.icon.data} width={10} height={10} />
                </a>
              )
            })}
        </div>
      </div>
    </footer>
  )
}

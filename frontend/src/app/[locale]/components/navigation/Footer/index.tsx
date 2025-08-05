"use client"
import styles from "@/components/navigation/Footer/Footer.module.scss"
import { LinkProps, SocialLinkProps } from "@/Interfaces/strapi-components/link.interface"
import React from "react"
import { useGlobalContext } from "@/global/contexts/global.context"
import NextMedia from "@/components/media/NextMedia"
import PersonalData from "@/components/elements/PersonalData"

export default function Footer() {
  const { global } = useGlobalContext()

  const logo = global?.navigation?.logoFooter
  const links: LinkProps[] = global?.navigation?.links || ([] as LinkProps[])
  const socialLinks: SocialLinkProps[] = global?.navigation?.socialLinks || ([] as SocialLinkProps[])

  return (
    <footer className={styles.block}>
      <div className={styles.content}>
        {/*{logo && (*/}
        <div className={styles.logo}>
          {global?.personaldata?.fullName || ""}
          {/*<NextMedia media={logo} width={50} height={50} isLink />*/}
        </div>
        {/*)}*/}
        <PersonalData></PersonalData>
      </div>
      <hr />
      <div className={styles.practical_info}>
        <span>©{new Date().getFullYear()} by Jacco van Kooten</span>
        <div className={styles.social_links}>
          {socialLinks &&
            socialLinks.map((link: SocialLinkProps) => {
              return (
                <a href={link.url} key={link.id}>
                  <NextMedia media={link.icon} width={10} height={10} />
                </a>
              )
            })}
        </div>
      </div>
    </footer>
  )
}

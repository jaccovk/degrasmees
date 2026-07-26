"use client"
import React, { useState } from "react"
import styles from "@/components/navigation/Navbar/Navbar.module.scss"
import { LinkProps } from "@/Interfaces/strapi-components/link.interface"
import CustomLink from "@/components/link/CustomLink"
import ThemeToggle from "@/components/theme/ThemeToggle"
import HamburgerMenu from "@/components/navigation/HamburgerMenu"
import MobileNavigationMenu from "@/components/navigation/MobileNavigationMenu"
import NextMedia from "@/components/media/NextMedia"
import { Parts } from "@/Interfaces/api.interface"
import { useRouter } from "next/navigation"

function NavLink(props: { link: LinkProps }) {
  const { link } = props

  return (
    <li>
      <CustomLink link={link} />
    </li>
  )
}

export default function Navbar({ global }: { global: any }) {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  const logo: Parts = global?.navigation?.logo || ({} as Parts)
  const links: LinkProps[] = global?.navigation?.links || ([] as LinkProps[])

  return (
    <header className={styles.navigation_container}>
      <nav className={styles.navigation}>
        <div className={styles.block}>
          <div className={styles.logo}>
            {Object.keys(logo).length !== 0 ? (
              <NextMedia media={logo} isLink />
            ) : (
              <span onClick={() => router.push("/")}>{global?.personaldata?.fullName || ""}</span>
            )}
          </div>

          <div className={styles.content}>
            <ul>{links && links.map((link) => <NavLink key={link.id} link={link} />)}</ul>
            <ThemeToggle />
          </div>
          <div className={styles.mobile}>
            <HamburgerMenu isOpen={mobileMenuIsShown} setOpen={setMobileMenuIsShown} />
          </div>
        </div>
      </nav>
      <MobileNavigationMenu links={links} isOpen={mobileMenuIsShown} closeSelf={() => setMobileMenuIsShown(false)} />
    </header>
  )
}

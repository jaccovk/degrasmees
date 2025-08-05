"use client"
import React, { useState } from "react"
import styles from "./Navbar.module.scss"
import { LinkProps } from "@/Interfaces/strapi-components/link.interface"
import CustomLink from "@/components/link/CustomLink"
import { useGlobalContext } from "@/global/contexts/global.context"
import useDarkMode from "@/theme/hooks/useDarkMode.hook"
import HamburgerMenu from "@/components/navigation/HamburgerMenu"
import MobileNavigationMenu from "@/components/navigation/MobileNavigationMenu"
import NextMedia from "@/components/media/NextMedia"
import { Parts } from "@/Interfaces/api.interface"

function NavLink(props: { link: LinkProps }) {
  const { link } = props

  return (
    <li>
      <CustomLink link={link} />
    </li>
  )
}

export default function Navbar() {
  const { global } = useGlobalContext()
  const { ThemeSwitch } = useDarkMode()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  const logo: Parts = global?.navigation?.logo || ({} as Parts)
  const links: LinkProps[] = global?.navigation?.links || ([] as LinkProps[])

  return (
    <div className="navigation-container">
      <nav className={styles.navigation}>
        <div className={styles.block}>
          <div className={styles.logo}>
            {/*<NextMedia media={logo} isLink />*/}
            <span>{global?.personaldata?.fullName || ""}</span>
          </div>
          <div className={styles.content}>
            <ul>{links && links.map((link) => <NavLink key={link.id} link={link} />)}</ul>
            <ThemeSwitch />
          </div>
          <div className={styles.mobile}>
            <HamburgerMenu isOpen={mobileMenuIsShown} setOpen={setMobileMenuIsShown} />
          </div>
        </div>
      </nav>
      <MobileNavigationMenu links={links} isOpen={mobileMenuIsShown} closeSelf={() => setMobileMenuIsShown(false)} />
    </div>
  )
}

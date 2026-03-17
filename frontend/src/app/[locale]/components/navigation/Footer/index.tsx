import styles from "@/components/navigation/Footer/Footer.module.scss"
import { LinkProps, SocialLinkProps } from "@/Interfaces/strapi-components/link.interface"
import PersonalData from "@/components/elements/PersonalData"
import NextMedia from "@/components/media/NextMedia"

export default function Footer({ global }: { global: any }) {
  const links: LinkProps[] = global?.navigation?.links || []
  const socialLinks: SocialLinkProps[] = global?.navigation?.socialLinks || []

  return (
    <footer className={styles.block}>
      <div className={styles.content}>
        {/*{logo && (*/}
        <div className={styles.logo}>
          {global?.personaldata?.fullName || ""}
          {/*<NextMedia media={logo} width={50} height={50} isLink />*/}
        </div>
        {/*)}*/}
        <PersonalData global={global}></PersonalData>
      </div>
      <hr />
      <div className={styles.practicalInfo}>
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

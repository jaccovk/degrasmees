"use client"
import styles from "@/components/sections/Gallery/Gallery.module.scss"
import { GalleryProps } from "@/Interfaces/strapi-components/sections.interface"
import propertyExists from "@/utils/property-exists"
import NextMedia from "@/components/global/Media/NextMedia"
import Slider from "@/components/global/Slider"
import { useEffect, useState } from "react"

// TODO: useSection hook
// export default function Gallery({ id, __component, lang }: UseSectionProps) {
// const { data } = useSection({ id, __component, lang });
// const { posters, titles } = data as HeroProps;

export default function Gallery(props: GalleryProps) {
  const { id, title, media } = props
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => setScreenWidth(window.innerWidth), [])

  if (!propertyExists(media, "Gallery", "media") || media.length === 0) return null

  const [firstMedia, ...restMedia] = media // pick the first media item and spread the rest

  return (
    <div className={styles.block} id={title}>
      <div className={styles.overlay}>
        <NextMedia media={firstMedia} />
      </div>
      <Slider settings={{ defaultSlidesWidth: screenWidth < 768 ? "54vw" : "20vw" }}>
        {/*  TODO ::: replace defaultSlidesWidth etc. to the stylesheet (--default-styles-width) to remove Javascript `screenwidth < ...` */}
        {restMedia.map((item, index) => (
          <div key={index} className={styles.sliderItem}>
            <NextMedia media={item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

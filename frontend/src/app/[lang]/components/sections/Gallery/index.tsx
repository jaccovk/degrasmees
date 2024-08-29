"use client"
import styles from "@/styles/sections/Gallery.module.scss"
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

  if (!propertyExists(media?.data, "Gallery", "media") || media.data.length === 0) return null

  const [firstMedia, ...restMedia] = media.data // pick the first media item and spread the rest

  return (
    <div className={styles.block} id={title}>
      <div className={styles.overlay}>
        <NextMedia media={firstMedia} />
      </div>
      <Slider settings={{ defaultSlidesWidth: screenWidth < 768 ? "45vw" : "20vw" }}>
        {restMedia.map((item, index) => (
          <div key={index} className={styles.sliderItem}>
            <NextMedia media={item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

"use client"
import styles from "./Gallery.module.scss"
import { GalleryProps } from "@/Interfaces/strapi-components/sections.interface"
import propertyExists from "@/utils/property-exists"
import NextMedia from "@/components/global/Media/NextMedia"
import Slider from "@/components/global/Slider"
import React, { useEffect, useState } from "react"
import { Modal } from "@/components/Modal"
import { GalleryModal } from "./GalleryModal"
import { Parts } from "@/Interfaces/api.interface"

// TODO: useSection hook
// export default function Gallery({ id, __component, locale }: UseSectionProps) {
// const { data } = useSection({ id, __component, locale });
// const { posters, titles } = data as HeroProps;

export default function Gallery(props: GalleryProps) {
  const { id, title, media } = props
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => setScreenWidth(window.innerWidth), [])

  const [selectedItem, setSelectedItem] = useState<Parts | null>(null)
  const handleClose = () => setSelectedItem(null)

  if (!propertyExists(media, "Gallery", "media") || media.length === 0) return null

  const [firstMedia, ...restMedia] = media // pick the first media item and spread the rest
  const handleArrowClick = (direction: "left" | "right") => {
    if (!selectedItem) return

    const currentIndex = restMedia.findIndex((item) => item.id === selectedItem.id)

    if (currentIndex === -1) return

    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + restMedia.length) % restMedia.length
        : (currentIndex + 1) % restMedia.length

    setSelectedItem(restMedia[newIndex])
  }

  return (
    <>
      {selectedItem && (
        <GalleryModal selectedItem={selectedItem} handleClose={handleClose} handleArrowClick={handleArrowClick} />
      )}

      <div className={styles.block} id={title}>
        <div className={styles.overlay}>
          <NextMedia media={firstMedia} />
        </div>
        <Slider settings={{ defaultSlidesWidth: screenWidth < 768 ? "54vw" : "20vw" }}>
          {/*  TODO ::: replace defaultSlidesWidth etc. to the stylesheet (--default-styles-width) to remove Javascript `screenwidth < ...` */}
          {restMedia.map((item) => (
            <div key={item.id} className={styles.sliderItem} onClick={() => setSelectedItem(item)}>
              <NextMedia media={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

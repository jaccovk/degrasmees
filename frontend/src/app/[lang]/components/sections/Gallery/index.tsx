"use client"
import styles from "@/styles/sections/Gallery.module.scss"
import { GalleryProps } from "@/Interfaces/strapi-components/sections.interface"
import MediaSlider from "@/components/global/MediaSlider"
import propertyExists from "@/utils/property-exists"
import NextMedia from "@/components/global/Media/NextMedia"

// TODO: useSection hook
// export default function Gallery({ id, __component, lang }: UseSectionProps) {
// const { data } = useSection({ id, __component, lang });
// const { posters, titles } = data as HeroProps;

export default function Gallery(props: GalleryProps) {
  const { id, title, media } = props
  if (!propertyExists(media?.data, "Gallery", "media") || media.data.length === 0) return null

  const [firstMedia, ...restMedia] = media.data // pick the first media item and spread the rest

  return (
    <div className={styles.block} id={title}>
      <div className={styles.overlay}>
        <NextMedia media={firstMedia} />
      </div>
      <div className={styles.media}>
        <MediaSlider
          media={{ data: restMedia }}
          settings={{
            breakpoints: {
              "(max-width: 250px)": {
                slides: { perView: 1, origin: "center" },
              },
              "(min-width: 251px) and (max-width: 350px)": {
                slides: { perView: 1.25, origin: "center" },
              },
              "(min-width: 351px) and (max-width: 470px)": {
                slides: { perView: 1.5, origin: "center" },
              },
              "(min-width: 471px) and (max-width: 530px)": {
                slides: { perView: 2, origin: "center" },
              },
              "(min-width: 531px) and (max-width: 650px)": {
                slides: { perView: 2.25, origin: "center" },
              },
              "(min-width: 651px) and (max-width: 768px)": {
                slides: { perView: 2.75, origin: "center" },
              },
              "(min-width: 769px) and (max-width: 1024px)": {
                slides: { perView: 1.75, origin: "center" },
              },
              "(min-width: 1025px) and (max-width: 1099px)": {
                slides: { perView: 2, origin: "center" },
              },
              "(min-width: 1100px) and (max-width: 1299px)": {
                slides: { perView: 2.25, origin: "center" },
              },
              "(min-width: 1300px ) and (max-width: 1599px)": {
                slides: { perView: 2.75, origin: "center" },
              },
              "(min-width: 1600px)": {
                slides: { perView: 3.5, origin: "center" },
              },
            },
          }}
        ></MediaSlider>
      </div>
    </div>
  )
}

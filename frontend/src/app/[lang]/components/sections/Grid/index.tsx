"use client"
import styles from "@/components/sections/Grid/Grid.module.scss"
import { GridProps } from "@/Interfaces/strapi-components/sections.interface"
import MediaSlider from "@/components/global/MediaSlider"
import classNames from "classnames"
import NextMedia from "@/components/global/Media/NextMedia"
import Slider from "@/components/global/Slider"
import React from "react"

// TODO: useSection hook
// export default function Grid({ id, __component, lang }: UseSectionProps) {
// const { data } = useSection({ id, __component, lang });
// const { posters, titles } = data as HeroProps;

export default function Grid(props: GridProps) {
  const { id, title, rows } = props

  const textColor = (index: number) => {
    return index % 2 ? styles.textPrimary : styles.textSecondary
  }

  return (
    <div className={styles.block} id={title}>
      {rows.length &&
        rows.map(({ columns }, index) => (
          <div key={index} className={styles.row}>
            {columns &&
              columns.map(({ text, media }, index) => (
                <div key={index} className={styles.column}>
                  {text && (
                    <div className={classNames(styles.textContainer, textColor(index))}>
                      <div className={styles.text}>
                        <h3>{text}</h3>
                      </div>
                    </div>
                  )}
                  <Slider settings={{ isPlaying: false, defaultSlidesWidth: "100%" }}>
                    {media.map((media) => (
                      <NextMedia // TODO ::: test this component
                        key={media.documentId}
                        media={media}
                        width={1920}
                        height={1080}
                      ></NextMedia>
                    ))}
                  </Slider>
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

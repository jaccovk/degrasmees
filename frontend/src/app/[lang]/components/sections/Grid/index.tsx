"use client"
import styles from "@/styles/sections/Grid.module.scss"
import { GridProps } from "@/Interfaces/strapi-components/sections.interface"
import MediaSlider from "@/components/global/MediaSlider"
import classNames from "classnames"

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
                  {media && <MediaSlider media={media} />}
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

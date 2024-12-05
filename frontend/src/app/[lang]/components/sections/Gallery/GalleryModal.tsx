import { Modal } from "@/components/Modal"
import React from "react"
import { Parts } from "@/Interfaces/api.interface"
import style from "@/components/sections/Gallery/GalleryModal.module.scss"
import NextMedia from "@/components/global/Media/NextMedia"
import { ArrowLeft } from "@/components/svg/ArrowLeft"
import { ArrowRight } from "@/components/svg/ArrowRight"
interface Props {
  selectedItem: Parts
  handleClose: () => void
  handleArrowClick: (direction: "left" | "right") => void
}

export const GalleryModal = ({ selectedItem, handleClose, handleArrowClick }: Props) => {
  return (
    <Modal handleClose={handleClose}>
      <div className={style.stackOrGrid}>
        <NextMedia media={selectedItem}></NextMedia>

        <div className={style.arrows}>
          <ArrowLeft className={style.arrow} onClick={() => handleArrowClick("left")}></ArrowLeft>
          <ArrowRight className={style.arrow} onClick={() => handleArrowClick("right")}></ArrowRight>
        </div>
      </div>
    </Modal>
  )
}

import React from "react";
import dev from "../../assets/coding.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import s from "./Hero.module.scss";
export default function Hero({ viewRef }) {
  return (
    <div ref={viewRef} className={s.container}>
      <div className={s.content}>
        <h1 className={s.heading}>Upswing Digital</h1>
        <p className={s.subHeading}>
          Helping you with your online presence at affordable prices.
        </p>
        <div className={s.buttonWrapper}>
          <ButtonPrimary text="Hire Us" href="#contact" />
          <ButtonSecondary href="#services" text="View Services" />
        </div>
      </div>
      <div className={s.imageWrapper}>
        <img className={s.image} src={dev} alt="" />
      </div>
    </div>
  );
}

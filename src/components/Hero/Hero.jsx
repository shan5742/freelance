import React from "react";
import dev from "../../assets/coding.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import s from "./Hero.module.scss";
export default function Hero() {
  const onHire = () => {
    console.log("Hire Clicked");
  };
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className={s.heading}>Ready, Dev, Go</h1>
        <p className={s.subHeading}>
          Helping you with your online presence at affordable prices.
        </p>
        <div className={s.buttonWrapper}>
          <ButtonPrimary text="Hire Us" onClick={onHire} />
          <ButtonSecondary text="View Services" />
        </div>
      </div>
      <div className={s.imageWrapper}>
        <img className={s.image} src={dev} alt="" />
      </div>
    </div>
  );
}

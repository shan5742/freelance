import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import s from "./Nav.module.scss";
import Logo from "../../assets/logo_transparent.png";

export default function Nav() {
  return (
    <div className={s.nav}>
      <img src={Logo} alt="" className={s.image} />
      <ButtonPrimary text="Contact" href="#contact" className={s.button} />
    </div>
  );
}

import React from "react";
import s from "./ButtonSecondary.module.scss";
export default function ButtonSecondary({ text, href }) {
  return (
    <a href={href} a className={s.button}>
      {text}
    </a>
  );
}

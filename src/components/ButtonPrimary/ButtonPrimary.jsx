import React from "react";
import s from "./ButtonPrimary.module.scss";

export default function ButtonPrimary({ text, href }) {
  return (
    <a href={href} a className={s.button}>
      {text}
    </a>
  );
}

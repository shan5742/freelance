import React from "react";
import s from "./ButtonSecondary.module.scss";
export default function ButtonSecondary({ text, onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      {text}
    </button>
  );
}

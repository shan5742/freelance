import React from "react";
import s from "./ButtonPrimary.module.scss";

export default function ButtonPrimary({ text, onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      {text}
    </button>
  );
}

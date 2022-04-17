import React from "react";
import s from "./You.module.scss";
import { FaThumbsUp, FaRegClock, FaMoneyBillAlt } from "react-icons/fa";

export default function You() {
  const iconColor = "#ff7370";
  return (
    <div className={s.container}>
      <h1 className={s.heading}>What's In It For You</h1>
      <div className={s.wrapper}>
        <div className={s.item}>
          <FaThumbsUp size={60} color={iconColor} />
          <p className={s.itemText}>
            Attract better clients with your blazing fast website
          </p>
        </div>
        <div className={s.item}>
          <FaRegClock size={60} color={iconColor} />
          <p className={s.itemText}>
            More time. You focus on your business. We'll focus on your site
          </p>
        </div>
        <div className={s.item}>
          <FaMoneyBillAlt size={60} color={iconColor} />
          <p className={s.itemText}>
            Increase revenue with your superior online presence{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

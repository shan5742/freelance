import React from "react";
import s from "./Guarantee.module.scss";
import Team from "../../assets/team.svg";
import Product from "../../assets/multi.svg";
export default function Guarantee() {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Our Guarantee</h1>
      <div className={s.wrapper}>
        <div className={s.item}>
          <img className={s.image} src={Team} alt="" />
          <h3 className={s.itemHeading}>Awesome Relationship</h3>
          <p>
            Communication is vital to a successful relationship. We take the
            time before development to make sure we are both aligned on scope
            and definition of done. All the way through development we are
            available and happy to answer any questions you might have
          </p>
        </div>
        <div className={s.item}>
          <img className={s.image} src={Product} alt="" />
          <h3 className={s.itemHeading}>A Fantastic Product</h3>
          <p>
            We are passionate and proud of our work. We are confident we will
            ship products you are equally proud of. Furthermore we pride
            ourselves on offering a great service that lasts, so your site will
            be up and running 24/7, while you focus on accelerating your
            business.
          </p>
        </div>
      </div>
    </div>
  );
}

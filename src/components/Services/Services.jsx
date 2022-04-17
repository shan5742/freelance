import React from "react";
import s from "./Services.module.scss";
import AppDev from "../../assets/app.svg";
import WebDev from "../../assets/development.svg";
import FullPackage from "../../assets/product.svg";

export default function Services() {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Our Services</h1>
      <div className={s.wrapper}>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={WebDev} alt="" />
          <h3 className={s.serviceHeader}>Web Development</h3>
          <p className={s.serviceText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quasi quibusdam nemo sint molestias, similique nisi! Ratione odio
            temporibus voluptatem, quam sapiente quis inventore, corrupti fuga
            a, illum minima ex.
          </p>
        </div>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={AppDev} alt="" />
          <h3 className={s.serviceHeader}>Mobile App Development</h3>
          <p className={s.serviceText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quasi quibusdam nemo sint molestias, similique nisi! Ratione odio
            temporibus voluptatem, quam sapiente quis inventore, corrupti fuga
            a, illum minima ex.
          </p>
        </div>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={FullPackage} alt="" />
          <h3 className={s.serviceHeader}>Hosting & Support</h3>
          <p className={s.serviceText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quasi quibusdam nemo sint molestias, similique nisi! Ratione odio
            temporibus voluptatem, quam sapiente quis inventore, corrupti fuga
            a, illum minima ex.
          </p>
        </div>
      </div>
    </div>
  );
}

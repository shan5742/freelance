import React from "react";
import s from "./Contact.module.scss";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={s.outer}>
      <div id="contact" className={s.container}>
        <h1 className={s.heading}>Get In Touch</h1>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {errors.name && (
            <span className={s.error}>This field is required</span>
          )}
          <input
            {...register("name", { required: true })}
            placeholder="What shall we call you?"
            className={s.input}
          />
          {errors.email && (
            <span className={s.error}>This field is required</span>
          )}
          <input
            {...register("email", { required: true })}
            placeholder="Where can we email you?"
            className={s.input}
          />
          {errors.message && (
            <span className={s.error}>This field is required</span>
          )}
          <textarea
            {...register("message", { required: true })}
            placeholder="Tell us about your awesome project..."
            className={s.textarea}
            rows={10}
          />

          <input className={s.button} type="submit" />
        </form>
      </div>
    </div>
  );
}

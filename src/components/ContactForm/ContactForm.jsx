import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { IoCallOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        {/* for buttons and input boxes */}
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              type="text"
              name="text"
              rows="8"
              style={{ resize: "none", outline: "none" }}
            ></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service .svg"></img>
      </div>
      {/* for image */}
    </section>
  );
};

export default ContactForm;

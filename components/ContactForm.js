// components/ContactForm.js

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import utilStyles from "../styles/utils.module.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    let correo = document.getElementById("email").value;
    if (correo === "") { alert("Los campos no pueden quedar vacios");
    return true;}
    axios
      .post("https://eo6iizo6oars1fk.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Gracias por registrarte, mantente pendiente de tu correo para actualizaciones 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <form className={utilStyles.headingMd} onSubmit={handleSubmit(onSubmit)}>
      <h4>Únete a mi lista de contactos</h4>
      <p> Indica tu correo electronico</p>

      <input id="email" {...register("email")} placeholder="me@gmail.com"></input>

      <button role="submit">{isSubmitting ? "Submitting" : "Enviar"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
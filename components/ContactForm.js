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
    if (correo === "") { alert("El campo email no puede estar vacio");
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
    <div>
    <form className={utilStyles.headingMd} onSubmit={handleSubmit(onSubmit)}>
      <h4>Únete a mi lista de contactos</h4>
      <p> Indica tu correo electronico</p>

      <input id="email" {...register("email")} placeholder="miemail@mail.com"></input>

      <button role="submit">{isSubmitting ? "Submitting" : "Enviar"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
    <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="josegermanx" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://cl.linkedin.com/in/josegermanx?trk=profile-badge">Jose German Martinez Melchor</a></div>
              
    </div>
  );
}
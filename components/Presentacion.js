import React from 'react';
import utilStyles from "../styles/utils.module.css";

export default function Presentacion() {
  return (
    <div className={utilStyles.headingMd}><p>
    (Este sitio web es parte de la muestra de mi trabajo como desarrollador front-end, y puedes
    ver el código fuente en el repositorio{" "}
    <a href="https://github.com/jgxdev/nextjs-blog">en github</a>.)
  </p>
  </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
  return (
    <div>
        <div>
        <h2>Portfolio de proyectos</h2>
        </div>
        <div>
            <ul>
            <li><div>
                <h3>Dionisio Wines</h3>
                <p>Web app desarrollada en ReactJS con un back-end hecho en nodeJS y express. Sitio web e-commerce de vinos en Argentina.</p>
                <p><strong>Tecnologías y características: </strong> React: ✓, Redux : ✓, NodeJS: ✓, Express: ✓, PostgreSQL: ✓, Sequelize: ✓, Auth: ✓, APIRest:✓, Integración de pagos on line: ✓, Registro de usaurios: ✓, Carro de compras: ✓</p>
                <a href="https://dionisiowines.onrender.com/" target="_blank" rel="noopener noreferrer">Ver el proyecto on line</a>
                <p><img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1678886740/Blog/portada_dionision_wines_fmeace.png" alt="Dionisio Wines" /></p>
                </div></li>
                <li><div>
                <h3>CountriesApp</h3>
                <p>App SPA desarrollada en ReactJS con un back-end hecho en nodeJS y express. Consumo de API y manejo de bases de datos.</p>
                <p><strong>Tecnologías y características: </strong> React: ✓, Redux : ✓, NodeJS: ✓, Express: ✓, PostgreSQL: ✓, Sequelize: ✓, Auth: ✓, APIRest:✓</p>
                <a href="https://countriespi-pro.onrender.com/" target="_blank" rel="noopener noreferrer">Ver el proyecto on line</a>
                <p><img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1678886889/Blog/portada_countries_app_qoriac.png" alt="Dionisio Wines" /></p>
                </div></li>
            </ul>
            </div>
    
    </div>
  )
}

import React from 'react'

const Main = ({ nombre, edad }) => {

    console.table({ nombre, edad })
    /* const { nombre, edad } = props */

    return (
        <main>
            <h2>Bienvenido {nombre}!</h2>
            <p>Tienes {edad} años de edad</p>
        </main>
    )
}

export default Main
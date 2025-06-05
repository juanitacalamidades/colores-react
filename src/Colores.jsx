import { useState, useEffect } from "react"
import Formulario from "./Formulario"
import Item from "./Item"

export default function Colores(){

    let [colores, setColores] = useState([])

    // carga inicial de los datos
    //useEffect es como hacer la conexión inicial a la db para traer los colores a react
    useEffect( () => { 
        fetch("http://localhost:3000/colores")
        .then(respuesta => respuesta.json())
        .then( colores => setColores(colores) )
    }, [])

    function crearColor(color){
        setColores([...colores, color])
    }

    // * receta
    function borrarColor(id){
        setColores(colores.filter( color => color.id != id ))
    }

    return <>
            <Formulario crearColor={crearColor} />
            <ul>
                { colores.map( ({id,r,g,b}) => <Item key={id} id={id} r={r} g={g} b={b} borrarColor={borrarColor}/> ) }
            </ul>

         </>
}
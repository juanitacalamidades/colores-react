export default function Item({id,r,g,b,borrarColor}){
    
    let rgb = [r,g,b].join(",")

    return <li onClick={ () => {
        fetch("https://colores-react-uytr.onrender.com/colores/borrar/" + id, {
            method : "DELETE"
        })
        .then(respuesta => {
            if(respuesta.status == 204){
                return borrarColor(id)
            }
            console.log("...error")
        })
    } } style={ {
        backgroundColor : `rgb(${rgb})`
    } }>{ rgb }</li>
}
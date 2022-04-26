import React, {
    useState
} from "react";
import Encabezado from './encabezado.js';
import './tabla.css'
import Fila from "./fila.js";

function Tabla({
    entidades = [],
    editarEntidad = () => {},
    eliminarEntidad = () => {},
    columnas = [],
}) {
    console.log({entidades})
    //const columnas = entidades.length > 0 ? Object.keys(entidades[0]):[];
    return <section id="tabla">
		<div className="container" id="contenedor">
		<div id="alertas"> </div>
		<table className="table caption-top">
		<Encabezado
			columnas = {columnas}
		/>
		<tbody id="tabla-mascotas">
		{entidades.map((entidad, index) =>(
			<Fila 
				key={`fila-${index}`} 
				entidad = {entidad} 
				index={index}
				editarEntidad = {editarEntidad}
				eliminarEntidad = {eliminarEntidad}
				columnas = {columnas}
			/>	
		))}
		</tbody>
		</table>
		</div>
		</section>
}

export default Tabla;

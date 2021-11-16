import React from "react";
import BtnAction from "../Btn/btn.js";

const evaluarCampo = ({entidad , columna}) =>{
	//console.log({entidad});
	//console.log({columna});
	//console.log('entidad[columna]}' , entidad.mascota.Nombre);
	if(columna === "veterinaria"){
		return `${entidad[columna].Nombre}`;
	}
	if (columna === "mascota"){
		console.log({columna});
		return `${entidad[columna].Nombre}`;
	}
	if(columna  === "dueno"){
		return `${entidad[columna].Nombre}`;
	
	}
	return entidad[columna];
}

function Fila ({
		props , 
		entidad , 
		index , 
		columnas = [],
		editarEntidad = () =>{},
		eliminarEntidad = () =>{},
		}){
//	console.log('Este es' , {index});
	return (
		<tr>
		<th scope="row">{index}</th>
		{columnas.map((columna , _index) => (
			<td 
				key={`col-${columna}-${_index}`}>
				{evaluarCampo({entidad ,columna})}

			</td>
		))}
		<td>
		<div className ="btn-group">
		<BtnAction 
			tipo="editar" 
			onClick = {editarEntidad} 
			index = {index}/>
		<BtnAction 
			tipo="eliminar" 
			onClick = {
				(e) => eliminarEntidad(
					e ,index)} 
		/>
		</div>
		</td>

		</tr>
	);
}
export default Fila;

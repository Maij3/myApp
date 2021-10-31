import React from "react";
import BtnAction from "../Btn/btn.js";
function Fila (props){
	return (
		<tr>
		<th scope="row">{props.index}</th>
		<td>{props.entidad.Nombre}</td>
		<td>{props.entidad.Peso + "Kg"}</td>
		<td>{props.entidad.Edad}</td>
		<td>{props.entidad.Raza}</td>
		<td>
		<div className ="btn-group">
		<BtnAction tipo="editar" onClick = {props.editarEntidad} index = {props.index}/>
		<BtnAction tipo="eliminar" />
		</div>
		</td>

		</tr>
	);
}
export default Fila;

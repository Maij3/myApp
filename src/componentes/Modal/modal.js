import React from "react";
import Modalheader from "./Modalheader.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import "./Select.js";
import Select from "./Select.js";
import InputText from "./inputText.js";
import ModalFooter from "./Modalfooter.js"
function Modal({cambiarModal =() => {}, manejarInput =() => {} , crearEntidad =() => {} }) {
	return (
		<div 	className="modal fade" 
			id="exampleModal" 
			tabIndex="-1" 
			aria-labelledby="exampleModalLabel" 
			aria-hidden="true">

		<div className="modal-content">

		<Modalheader 
			cambiarModal={cambiarModal} 
		/>

		<div className="modal-body">
		<form action="" id="form">
		<div className="form-row">
		<div className="col">

		<input 
			type="hidden" 
			name="indice" 
			id="indice" 
		/>

		<InputText 
			tipo="text" 
			onInput = {manejarInput}  
			nombreCampo="Nombre" 
		/>
		</div>
		</div>

		<div className="form-row">
		<div className="col">

		<InputText 
			tipo="number" 
			onInput = {manejarInput} 
			nombreCampo="Peso" 
		/>

		</div>
		</div>

		<div className="form-row">
		<div className="col">

		<InputText 
			tipo="number" 
			onInput = {manejarInput} 
			nombreCampo="Edad" 
		/>

		</div>
		</div>

		<div className="form-row">
		<Select options = {[	
			{valor: "Pastor Aleman" , etiqueta:"Pastor Aleman"},
			{valor: "Labrador" , etiqueta:"Labrador"},
			{valor: "Bulldog" , etiqueta:"Bulldog"},
			{valor: "Golden retriver", etiqueta:"Golden retriver"},
			{valor: "Poodle", etiqueta:"Poodle" },
		]} onChange = {manejarInput} nombreCampo = "Raza"/>
		</div>
		</form>
		</div>
		< ModalFooter cambiarModal = {cambiarModal} crearEntidad = {crearEntidad} />	
		</div>
		</div>

	);
}

export default Modal;


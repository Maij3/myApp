import React from "react";
import Modalheader from "./Modalheader.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import "./Select.js";
import Select from "./Select.js";
import InputText from "./inputText.js";
import ModalFooter from "./Modalfooter.js";
function Modal({cambiarModal =() => {}, 
	manejarInput =() => {} , 
	crearEntidad =() => {} , 
	objeto = {},
	children = [],
	}) {	
	return (
		<div className="modal fade" 
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
					{children}
			</div>
		</form>
		</div>
		< ModalFooter 
			cambiarModal = {cambiarModal} 
			crearEntidad = {crearEntidad} />	
		</div>
		</div>

	);
}

export default Modal;


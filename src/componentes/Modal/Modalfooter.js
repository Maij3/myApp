import React from "react";

function ModalFooter({cambiarModal =() => {} , crearEntidad =() => {}}){
	return (
		<div className="modal-footer">
		
		<button 
			type="button" 
			onClick={cambiarModal} 
			className="btn btn-secondary" 
			data-bs-dismiss="modal">
			Close
		</button>
		
		<button 
			type="button" 
			onClick={crearEntidad} 
			id="btnCreate" 
			data-bs-dismiss="modal" 
			className="btn btn-primary">
			Crear
		</button>
		</div>

	);
}
export default ModalFooter;

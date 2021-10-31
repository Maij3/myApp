import React from "react";

function Modalheader( {cambiarModal = () => {}}){
	return(
		<div className="modal-header">

		<h5 
			className="modal-title" 
			id="exampleModalLabel">
			Mascota
		</h5>

		<button 
			type="button" 
			onClick={cambiarModal} 
			className="btn-close" 
			data-bs-dismiss="modal" 
			aria-label="Close" > 
		</button>

		</div>

	);
}
export default Modalheader;

import React from "react";


function ActionsMenu({ cambiarModal = () => { } }) {
	return (
		<div className="boton-group">
			<button 
				onClick={cambiarModal} 
				type="button" 
				className="btn btn-primary" 
				data-bs-toggle="modal" 
				data-bs-target="#exampleModal"> Create 
				<i className="fas fa-plus"></i> 
			</button>
		</div>

	);

}
export default ActionsMenu;

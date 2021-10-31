import React from "react";


function Select ({options =[], nombreCampo = "", onChange = ()=> {}}){
    return (
      <select 	
	    	className="form-select" 
	    	aria-label="Default select example" 
	    	onChange = {onChange}
	    	name = {nombreCampo}
	    >
          <option value="">Seleccione {nombreCampo}</option>
          {options.map(({ valor , etiqueta }, index) => (
          <option key={`${index}`} value={valor}>{etiqueta}</option>) 
          )}
     </select>
    );
}
export default Select;


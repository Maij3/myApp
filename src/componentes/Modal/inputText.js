import React from "react";

function InputText({tipo="text", nombreCampo , onInput = () =>{}}) {
    return (
        <div className="form-row">
            <div className="col">
                <input 
                    type={tipo}
                    className="form-control" 
                    name={nombreCampo} 
                    id={nombreCampo} 
                    placeholder={nombreCampo} 
	    	    onInput = {onInput}
                    />
            </div>
        </div>

    );
}

export default InputText;

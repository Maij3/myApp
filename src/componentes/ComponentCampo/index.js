import React from "react";
import Input from "../Modal/inputText";
import Select from "../Modal/Select";


function ComponentCampo({
    manejarInput = () => {},
    objeto = {},
    nombreCampo = "",
    options = {},
}) {

    switch (nombreCampo) {
        case "Nombre":
        case "Peso":
        case "Edad":
        case "Apellido":
        case "Dni":
        case "fechaCreacion":
        case "fechaEdicion":
        case "descripcion":
        case "Raza":
        case "diagnostico":
            return (
                <Input
			tipo="text"
			onInput = {manejarInput}
			nombreCampo={nombreCampo}
			placeholder = {nombreCampo}
			value={objeto[nombreCampo]}
			/>
            );
        case "dueno":
        case "mascota":
            console.log(options);
        case "veterinaria":
            return (
                <div className="container">
		{Object.keys(options).length > 0 ? (
		<Select
			nombreCampo = {nombreCampo}
			options = {options[nombreCampo]}
			onChange = {manejarInput}
			placeholder = "Tipo Animal"
			defaultValue={objeto[nombreCampo]}    
			selectedValue={objeto[nombreCampo]}
			value={objeto[nombreCampo]}
			/>
		    ) 
		    	: ("Cargar opciones"
			
			)}
		   </div>
            );
        default:
            return false;
    }
};

export default ComponentCampo

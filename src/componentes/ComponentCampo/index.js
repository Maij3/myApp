import React, {
    useState,
    useEffect
} from "react";
import Input from "../Modal/inputText";
import Select from "../Modal/Select";

const opcionesIniciales = {
    Raza: [{
            valor: "Perro",
            etiqueta: "Perro"
        },
        {
            valor: "Gato",
            etiqueta: "Gato"
        },
        {
            valor: "Pajaro",
            etiqueta: "Pajaro"
        },
        {
            valor: "Otro",
            etiqueta: "Otro"
        },
    ],
    diagnostico: [{
            valor: "Prurito de piel (sarna)",
            etiqueta: "Prurito de piel (sarna)"
        },
        {
            valor: "Moquillo",
            etiqueta: "Moquillo"
        },
        {
            valor: "Trauma cefalico",
            etiqueta: "Trauma cefalico"
        },
        {
            valor: "Parvovirosis",
            etiqueta: "Parvovirosis"
        },
    ],
    mascota: [],
    veterinaria: [],
    dueno: [],
}


function ComponentCampo({
    manejarInput = () => {},
    objeto = {},
    nombreCampo = "",
    options = {},
}) {
    
    //console.log('ComponentCampo');
    //const [options, setOptions] = useState(opcionesIniciales);
    /*useEffect(() => {
    }, []);*/
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
		    <>
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
		   </>	    
            );
		    debugger
        default:
            return false;
    }
};

export default ComponentCampo

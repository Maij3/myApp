import React, {
    Component
} from 'react';
import Nav from './componentes/Nav/nav.js';
import Tabla from "./componentes/Tabla/tabla.js";
import Modal from "./componentes/Modal/modal.js";
import ActionsMenu from "./componentes/ActionsMenu/actionsmenu.js";
import ComponentCampo from './componentes/ComponentCampo/index.js';
import {
    obtenerUno
} from "./servicio.js"
import {
    ListarEntidad,
    CrearEditarEntidad,
    eliminarEntidad
}
from "./servicio.js";

const tiposMascota = [{
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
]
const duenos = [{
        valor: "Esteban",
        etiqueta: "Esteban"
    },
    {
        valor: "Julian",
        etiqueta: "Julian"
    },
    {
        valor: "Jhon",
        etiqueta: "Jhon"
    },
    {
        valor: "Felix",
        etiqueta: "Felix"
    },
    {
        valor: "Camilo",
        etiqueta: "Camilo"
    },
]
/* const ComponentCampo = ({
			manejarInput = () =>{},
			objeto = {},
			nombreCampo="",
			options = [],
		}) => {
	switch (nombreCampo) {
		case "Nombre":
		case "Peso":
		case "Edad":
		case "Apellido":
		case "Dni":
		case "mascota":
		case "veterinaria":
		case "fechaCreacion":
		case "fechaEdicion":
		case "descripcion":
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
		case "Raza":
		case "dueno":
			return (
				<Select
					nombreCampo = {nombreCampo}
					options = {options}
					onChange = {manejarInput}
					placeholder = "Tipo Animal"
					value={objeto[nombreCampo]}
				/>
			);
		default:
			return false;
	}
};
*/
/*const ComponentCampo = {
	Nombre: Input,
	Peso:Input,
	Edad: Input,
	Raza: Select
}*/
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
}


class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: [],
            idObjeto: null,
            method: "POST",
            columnas: [],
            options: opcionesIniciales,
        };
    }
    //Codigo Componente
    cambiarModal = (_evento, method = "POST") => {
        this.setState({
            mostrarModal: !this.state.mostrarModal,
            method
        });
    };

    //Listar Mascotas
    listar = async () => {
        const {
            entidad
        } = this.props;
        const entidades = await ListarEntidad({
            entidad
        });
        let columnas = [];
        if (Array.isArray(entidades) && entidades.length > 0) {
            columnas = Object.keys(entidades[0]) || [];
        }
        this.setState({
            entidades,
            columnas
        });
        this.listar();
    }
    //Manejador De Input
    manejarInput = (evento) => {
        const {
            target: {
                value,
                name
            },
        } = evento;
        //Creacion del Objeto
        let objeto = { ...this.state.objeto
        };
        //Se Agrega un nuevo valor al Objeto
        objeto = { ...objeto,
            [name]: value
        };
        //Se Cambia El Estado Del Objeto
        this.setState({
            objeto
        });
        console.log({
            value,
            name,
            evento
        });
    };

    //Crear Entidad
    crearEntidad = async () => {
        const {
            entidad
        } = this.props;
        const {
            objeto,
            method,
            idObjeto
        } = this.state;
        //console.log({objeto});
        await CrearEditarEntidad({
            entidad,
            objeto,
            method,
            idObjeto
        });
        this.cambiarModal();
        this.listar();
    }

    //Editar
    editarEntidad = async (_evento, index) => {
        //30-11-2021 MODIFICACION
        /*const objeto = { ...this.state.entidades[index]
        };*/
        const {
            entidad
        } = this.props;
        const {
            options
        } = this.setState;
        const objeto = await obtenerUno({
            entidad,
            idObjeto: index
        });
        //30-11-2021 MODIFICACION
        this.setState({
            objeto,
            idObjeto: index
        }, () => {
            this.cambiarModal(null, "PUT");
        });
    }
    //Eliminar
    eliminarEntidad = async (_evento, index) => {
        const {
            entidad
        } = this.props;
        const respuesta = await eliminarEntidad({
            entidad,
            idObjeto: index
        });
        console.log({
            respuesta
        });
        this.listar();
    }
    componentDidMount() {
        this.listar();
    }
    //El metodo render siempre debe ir de ultimo
    render() {
        //this.listar();
        const {
            titulo = "No Tenemos Titulo", entidad
        } = this.props;
        const {
            columnas,
            idObjeto,
            entidades
        } = this.state;
        return ( <
            div className = "container" >
            <
            Nav titulo = {
                entidad
            }
            /> <
            ActionsMenu cambiarModal = {
                this.cambiarModal
            }
            /> <
            Tabla entidades = {
                entidades
            }
            editarEntidad = {
                this.editarEntidad
            }
            eliminarEntidad = {
                this.eliminarEntidad
            }
            columnas = {
                columnas
            }
            /> {
                this.state.mostrarModal && ( <
                        Modal cambiarModal = {
                            this.cambiarModal
                        }
                        manejarInput = {
                            this.manejarInput
                        }
                        crearEntidad = {
                            this.crearEntidad
                        }
                        //objeto = {this.state.objeto}
                        entidad = {
                            entidad
                        }
                        idObjeto = {
                            idObjeto
                        } >
                        {
                            columnas.map((columna, index) => {
                                    return ( <
                                        ComponentCampo key = {
                                            index
                                        }
                                        manejarInput = {
                                            this.manejarInput
                                        }
                                        objeto = {
                                            this.state.objeto
                                        }
                                        nombreCampo = {
                                            columna
                                        }
                                        />)
                                    })
                            } <
                            /Modal>

                        )
                    }

                    <
                    /div>
            );

        }

    }

    export default Pagina;

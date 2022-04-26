import "./App.css";
import Pagina from "./Pagina.js";
import {
    Routes,
    Route,
} from "react-router-dom";
//import Nav from "./componentes/Nav/nav.js";

function App() {
    return (
        <div className = "container" >
            <Routes>
                <Route exact path = "/"
                    element = { 
                        <Pagina
                            titulo = "Mascotas"
                            entidad = "mascotas" /
                        >
                    }
                />

                <Route path = "/mascotas"
                    element = { 
                        <Pagina
                            titulo = "Mascotas"
                            entidad = "mascotas" /
                        >
                    }
                /> 
                <Route path = "/veterinarias"
                    element = { 
                        <Pagina
                            titulo = "Veterinaria"
                            entidad = "veterinaria" /
                        >
                    }
                /> 
                <Route path = "/duenos"
                    element = { 
                        <Pagina
                            titulo = "Duenos"
                            entidad = "duenos" /
                        >
                    }
                /> 
                <Route path = "/consultas"
                    element = { 
                        <Pagina
                            titulo = "Consultas"
                            entidad = "consultas" /
                        >
                    }
                /> 
	        </Routes> 
        </div>
    );
}

export default App;

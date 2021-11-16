import './App.css';
import Pagina from "./Pagina.js";
import { BrowserRouter,
	Routes,
	Route  
} from "react-router-dom";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			 <Route path="/" element = {
				 <Pagina 
				 	titulo="Mascotas" 
				 	entidad ="mascotas" /> } 
				/>
			 <Route path="/veterinaria" element = {
				 <Pagina 
				 	titulo="Veterinaria" 
				 	entidad ="veterinaria" /> } 
				/>
			 <Route path="/duenos" element = {
				 <Pagina 
				 	titulo="Duenos" 
				 	entidad ="duenos" /> } 
				/>
			 <Route path="/consultas" element = {
				 <Pagina 
				 	titulo="Consultas" 
				 	entidad ="consultas" /> } 
				/>
		</Routes>
	</BrowserRouter>	
	);
	
  //return  <Pagina titulo="Mascotas" entidad ="mascotas" />; 
}

export default App;

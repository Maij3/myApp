const API_URL = "http://localhost:5000";
export  const ListarEntidad = async ({entidad = "mascotas"})=>{
	try{
		const respuesta = await fetch(`${API_URL}/${entidad}`);
		const datos = await respuesta.json();
		return datos;
	}catch(error){
		console.log({error});
	}
	
};

export  const CrearEditarEntidad = async ({entidad = "mascotas", objeto = {},method="POST",idObjeto = null})=>{
	try{	
		let url = null;
		if(method ==="PUT" && idObjeto){
			url+=`${API_URL}/${entidad}/${idObjeto}`;
		}else if(method === "POST"){
			url+=`${API_URL}/${entidad}`;
		}
		if(!url){
			throw new Error("No Existe La Url");
		}
		const respuesta = await fetch(`${API_URL}/${entidad}`,{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body : JSON.stringify(objeto),
		});
		const datos = await respuesta.json();
		return datos;
	}catch(error){
		console.log({error});
	}
	
};

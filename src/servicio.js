const API_URL = "http://localhost:5000";
export  const ListarEntidad = async ({entidad = "mascotas"})=>{
	try{
		const respuesta = await fetch(
		`${API_URL}/${entidad}`);
		const datos = await respuesta.json();
		return datos;
	}catch(error){
		console.log({error});
	}

};

export  const CrearEditarEntidad = async ({
		entidad = "mascotas", 
		objeto = {}, 
		method="POST" , 
		idObjeto = null
	})=>{
	debugger;
	try{
		let url = null;
		console.log({entidad});

		if(method ==="PUT" && (idObjeto || idObjeto === 0)){
			url=`${API_URL}/${entidad}/${idObjeto}`;
			console.log('Metodo', method);
			console.log(url);
		}else if(method === "POST"){
			url=`${API_URL}/${entidad}`;
			console.log('Metodo' , method);
		}
		if(!url){
			throw new Error("No Existe La Url");
		}
		const respuesta = await fetch(url,{
			method,
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
export  const eliminarEntidad = async ({
	entidad = "mascotas",
	idObjeto = null,
})=>{
	try{
		if(idObjeto || idObjeto === 0){
			const respuesta = await fetch(
				`${API_URL}/${entidad}/${idObjeto}`, {
				method:"DELETE",
			});
			const datos = await respuesta.json();
			return datos;
		}

		throw new Error("idObjeto no puede estar vacio");
	}catch(error){
		console.log({error});
	}

};

import React from 'react';

function Encabezado (props){
	console.log(props);
	if(props.columnas.length === 0)
		return false;
	return (
		<thead>
		<tr>
		<th scope="col">#</th>
		{props.columnas.map((columna ,index)=>(
			<th key={`${index}`}  scope="col">{columna}</th>
		))}
		<th scope="col"></th>
		</tr>
		</thead>
	);
}
export default Encabezado;

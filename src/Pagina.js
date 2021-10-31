import React, { Component } from 'react';
import Nav from './componentes/Nav/nav.js';
import Tabla from "./componentes/Tabla/tabla.js";
import Modal from "./componentes/Modal/modal.js";
import ActionsMenu from "./componentes/ActionsMenu/actionsmenu.js";
import {ListarEntidad , CrearEditarEntidad} from "./servicio.js";
class Pagina extends Component{
	constructor(props){
		super(props);
		this.state = {
			mostrarModal: false,
			entidades:[],
			objeto:[],
		};
	}
	//Codigo Componente
	cambiarModal = () =>{
		this.setState({mostrarModal: !this.state.mostrarModal});
	};

	//Listar Mascotas
	listar =  async () =>{
		const {entidad} = this.props;
		const entidades = await ListarEntidad({entidad});
		this.setState({entidades});
	}
	//Manejador De Input 
		manejarInput = (evento)=>{
			const { 
				target:{value, name}, 
			} = evento;
			//Creacion del Objeto
			let objeto ={...this.state.objeto};
			//Se Agrega un nuevo valor al Objeto
			objeto = {...objeto,[name]:value};
			//Se Cambia El Estado Del Objeto
			this.setState({objeto});
			console.log({ value , name , evento });		
		};

	//Crear Entidad 
	crearEntidad = async () =>{
		const {entidad} = this.props;
		const {objeto} = this.state;
		const method = "POST";
		console.log({objeto});
		await CrearEditarEntidad({entidad , objeto , method});
		this.cambiarModal();
		this.listar();
	}
	
	//Editar 
	editarEntidad = async (evento , index) =>{
		//const {target} = evento;
		console.log({index});
		/*const {entidad} = this.props;
		const {objeto} = this.state;
		const method = "POST";
		console.log({objeto});
		await CrearEditarEntidad({entidad , objeto , method});
		this.cambiarModal();
		this.listar();*/
	}
	componentDidMount(){
		this.listar();
	}
	//El metodo render siempre debe ir de ultimo
	render(){
		const {titulo = "No Tenemos Titulo"} = this.props;
			return (
			<>
			<div className="container">
			<Nav titulo = {titulo} />
			<ActionsMenu cambiarModal = {this.cambiarModal} />
			<Tabla  entidades = {this.state.entidades} 
				editarEntidad = {this.editarEntidad}/>
			</div>
			{this.state.mostrarModal && ( <Modal 
				cambiarModal = {this.cambiarModal} 
				manejarInput = {this.manejarInput} 
				crearEntidad = {this.crearEntidad} 
				/>
			)}
			</>
		);

	}

}

export default Pagina;

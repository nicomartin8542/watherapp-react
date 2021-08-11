import React, {useReducer} from "react";
import climaContext from "./climaContext";
import climaReducer from "./climaReducer";
import clienteAxios from "../../config/axios";

import {
	FORMULARIO_CLIMA,
	FORMULARIO_CLIMA_CERRAR,
	OBTENER_CLIMA,
	CALCULAR_TEMPERATURA_FAHRENHEIT,
	CALCULAR_TEMPERATURA_CELSIUS,
	MODIFICAR_METRICA,
	CARGAR_SPINNER,
	MENSAJE_ERROR,
} from "../../types/index";

const ClimaState = (props) => {
	//Inicio state
	const initialState = {
		formulario: null,
		climaSidebar: null,
		climasPrevision: null,
		medidas: "C",
		temperatura: null,
		spinner: null,
		msgError: null,
	};

	//Declaro dispach para ejecutar acciones
	const [state, dispatch] = useReducer(climaReducer, initialState);

	//Aqui van a ir las funciones a ejectuar

	//Cargar Formulario
	const cargarFormulario = () => {
		dispatch({
			type: FORMULARIO_CLIMA,
		});
	};

	const cerrarFormulario = () => {
		dispatch({
			type: FORMULARIO_CLIMA_CERRAR,
		});
	};

	const obtenerClima = async (ubicacion) => {
		const {city, country} = ubicacion;

		try {
			//Rcupero datos de clima del dia actual
			cargarSpinner();
			const urlCurrente = `/weather?q=${city},${country}&lang=es&appid=${process.env.REACT_APP_API_KEY}`;
			const current = await clienteAxios.get(urlCurrente);

			//Recupero latitud y longitod para consultar proximos 5 dias
			const long = current.data.coord.lon;
			const lat = current.data.coord.lat;

			const urlDays = `/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely&lang=es&appid=${process.env.REACT_APP_API_KEY}`;
			const dias = await clienteAxios.get(urlDays);

			dispatch({
				type: OBTENER_CLIMA,
				payload: [current.data, dias.data],
			});
		} catch (error) {
			dispatch({
				type: MENSAJE_ERROR,
				payload: {
					msg: "No se encontro datos para la ciudad. Verifique y reintente",
					categoria: "#cf4b3d",
				},
			});
		}
	};

	const obtenerClimaDefecto = async () => {
		try {
			cargarSpinner();
			cargarFormulario();
			const urlCurrente = `/weather?q=La%20Rioja,AR&lang=es&appid=${process.env.REACT_APP_API_KEY}`;
			const current = await clienteAxios.get(urlCurrente);

			//Recupero latitud y longitod para consultar proximos 5 dias
			const long = current.data.coord.lon;
			const lat = current.data.coord.lat;

			const urlDays = `/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely&lang=es&appid=${process.env.REACT_APP_API_KEY}`;
			const dias = await clienteAxios.get(urlDays);

			dispatch({
				type: OBTENER_CLIMA,
				payload: [current.data, dias.data],
			});
		} catch (error) {
			dispatch({
				type: MENSAJE_ERROR,
				payload: {
					msg: "Hubo un error al cargar los datos. Verifique y reintente",
					categoria: "#cf4b3d",
				},
			});
		}
	};

	const calcularTemperatura = (temp, medida) => {
		if (medida === "F") {
			dispatch({
				type: CALCULAR_TEMPERATURA_FAHRENHEIT,
				payload: temp,
			});
		} else {
			dispatch({
				type: CALCULAR_TEMPERATURA_CELSIUS,
				payload: temp,
			});
		}
	};

	const modificarMetrica = (metrica) => {
		dispatch({
			type: MODIFICAR_METRICA,
			payload: metrica,
		});
	};

	const cargarSpinner = () => {
		dispatch({
			type: CARGAR_SPINNER,
		});
	};

	return (
		<climaContext.Provider
			value={{
				formulario: state.formulario,
				climaSidebar: state.climaSidebar,
				climasPrevision: state.climasPrevision,
				medidas: state.medidas,
				temperatura: state.temperatura,
				spinner: state.spinner,
				msgError: state.msgError,
				cargarFormulario: cargarFormulario,
				cerrarFormulario: cerrarFormulario,
				obtenerClima: obtenerClima,
				obtenerClimaDefecto: obtenerClimaDefecto,
				calcularTemperatura: calcularTemperatura,
				modificarMetrica: modificarMetrica,
				cargarSpinner: cargarSpinner,
			}}
		>
			{props.children}
		</climaContext.Provider>
	);
};

export default ClimaState;

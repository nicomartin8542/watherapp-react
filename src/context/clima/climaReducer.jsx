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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case FORMULARIO_CLIMA:
			return {
				...state,
				formulario: true,
			};

		case FORMULARIO_CLIMA_CERRAR:
			return {
				...state,
				formulario: null,
				msgError: null,
			};

		case OBTENER_CLIMA:
			return {
				...state,
				climaSidebar: action.payload[0],
				climasPrevision: action.payload[1],
				msgError: null,
				formulario: null,
				spinner: null,
			};

		case CALCULAR_TEMPERATURA_FAHRENHEIT:
			return {
				...state,
				temperatura: Math.round(
					parseFloat(1.8 * (action.payload - 273) + 32, 10).toFixed(2),
				),
			};

		case CALCULAR_TEMPERATURA_CELSIUS:
			return {
				...state,
				temperatura: Math.round(
					parseFloat(action.payload - 273, 10).toFixed(2),
				),
			};

		case MODIFICAR_METRICA:
			return {
				...state,
				medidas: action.payload,
			};

		case CARGAR_SPINNER:
			return {
				...state,
				spinner: true,
			};

		case MENSAJE_ERROR:
			return {
				...state,
				msgError: action.payload,
				spinner: null,
			};

		default:
			return state;
	}
};

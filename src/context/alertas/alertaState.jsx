import React, {useReducer} from "react";
import alertaReducer from "../../context/alertas/alertaReducer";
import alertaContext from "../../context/alertas/alertaContext";
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../../types/index";

const AlertaState = (props) => {
	//Inicializo state
	const initialState = {
		alerta: null,
	};

	//Declaro dispatch para ejecutar acciones
	const [state, dispatch] = useReducer(alertaReducer, initialState);

	//Funciones para el actualizar state de alertas
	const mostrarAlerta = (alerta) => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: alerta,
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA,
			});
		}, 3000);
	};

	return (
		<alertaContext.Provider
			value={{
				alerta: state.alerta,
				mostrarAlerta: mostrarAlerta,
			}}
		>
			{props.children}
		</alertaContext.Provider>
	);
};

export default AlertaState;

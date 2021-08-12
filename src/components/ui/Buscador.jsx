import React, {useContext} from "react";
import styled from "@emotion/styled";
import FormBuscador from "../ui/FormBuscador";

import ClimaContext from "../../context/clima/climaContext";

const BuscadorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const BotonCerrar = styled.button`
	padding: 1rem;
	font-size: 3rem;
	color: ${(props) =>
		props.btnBlanco ? "var(--azulOscuro)" : "var(--blanco)"};
	background-color: ${(props) =>
		props.btnBlanco ? "var(--gris4)" : "var(--azulClaro)"};
	border: none;
	align-items: right;
	position: absolute;
	right: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const Buscador = () => {
	//Inicializo context
	const climaContext = useContext(ClimaContext);

	//Obtenego variables
	const {cerrarFormulario, fondoBlanco} = climaContext;

	return (
		<BuscadorContainer>
			<BotonCerrar
				type="button"
				btnBlanco={fondoBlanco}
				onClick={() => cerrarFormulario()}
			>
				&#xD7;
			</BotonCerrar>
			<FormBuscador />
		</BuscadorContainer>
	);
};

export default Buscador;

import React, {useContext} from "react";
import styled from "@emotion/styled";
import Dias from "../principal/Dias";
import Hightlights from "../principal/Hightlights";
import ClimaContext from "../../context/clima/climaContext";

const ContenedorPrincipal = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 5rem;

	@media screen and (max-width: 1000px) {
		padding: 0 1rem;
	}

	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}

	@media screen and (min-width: 1000px) {
		animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 1s; /* don't forget to set a duration! */
	}

	@media screen and (max-width: 480px) {
		padding: 0 1rem;
	}
`;

const Principal = () => {
	const climaContext = useContext(ClimaContext);
	const {formulario} = climaContext;

	if (formulario) return null;
	return (
		<ContenedorPrincipal>
			<Dias />
			<Hightlights />
		</ContenedorPrincipal>
	);
};

export default Principal;

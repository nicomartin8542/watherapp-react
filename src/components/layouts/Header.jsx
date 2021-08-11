import React, {useContext} from "react";
import styled from "@emotion/styled";
import BotonHeader from "../styled/BotonHeader";
import ClimaContext from "../../context/clima/climaContext";

const ContenedorHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 2rem;
	margin-right: 10rem;

	@media screen and (max-width: 768px) {
		margin: 0;
		justify-content: center;
	}
`;

const Header = () => {
	//Importo state de clima
	const climaContext = useContext(ClimaContext);
	const {modificarMetrica, medidas, formulario, climaSidebar} = climaContext;

	if (formulario || !climaSidebar) return null;
	return (
		<ContenedorHeader>
			<BotonHeader
				select={medidas === "C" ? true : false}
				type="button"
				onClick={() => modificarMetrica("C")}
			>
				°C
			</BotonHeader>
			<BotonHeader
				select={medidas === "F" ? true : false}
				type="button"
				onClick={() => modificarMetrica("F")}
			>
				°F
			</BotonHeader>
		</ContenedorHeader>
	);
};

export default Header;

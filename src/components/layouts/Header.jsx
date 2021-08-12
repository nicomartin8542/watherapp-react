import React, {useContext} from "react";
import styled from "@emotion/styled";
import BotonHeader from "../styled/BotonHeader";
import ClimaContext from "../../context/clima/climaContext";

const ContenedorHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 2rem;
	margin-right: 10rem;
	position: relative;

	@media screen and (max-width: 768px) {
		margin: 0;
		justify-content: center;
	}
`;

const Header = () => {
	//Importo state de clima
	const climaContext = useContext(ClimaContext);
	const {modificarMetrica, medidas, formulario, climaSidebar, fondoBlanco} =
		climaContext;

	if (formulario || !climaSidebar) return null;
	return (
		<ContenedorHeader>
			<div>
				<BotonHeader
					select={medidas === "C" ? true : false}
					btnBlanco={fondoBlanco}
					type="button"
					onClick={() => modificarMetrica("C")}
				>
					°C
				</BotonHeader>
				<BotonHeader
					select={medidas === "F" ? true : false}
					btnBlanco={fondoBlanco}
					type="button"
					onClick={() => modificarMetrica("F")}
				>
					°F
				</BotonHeader>
			</div>
		</ContenedorHeader>
	);
};

export default Header;

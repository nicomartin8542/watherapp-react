import React, {useContext} from "react";
import styled from "@emotion/styled";
import ClimaSidebar from "../ui/ClimaSidebar";
import Buscador from "../ui/Buscador";
import ClimaContext from "../../context/clima/climaContext";
import Spinner from "../spinner/Spinner";

const ContendorClima = styled.div`
	@media screen and (min-width: 1000px) {
		animation: fadeInDown;
		animation-duration: 1s;
	}
`;

const Aside = styled.aside`
	background-color: ${(props) =>
		props.bdBlanco ? "var(--gris4)" : "var(--azulClaro)"};
	color: ${(props) => (props.bdBlanco ? "var(--azulOscuro)" : "var(--blanco)")};
`;

const SideBar = () => {
	//Inicializo context de clima
	const climaContext = useContext(ClimaContext);

	//Extraigo variables y funciones del state de climaContext
	const {formulario, spinner, fondoBlanco} = climaContext;

	return (
		<Aside bdBlanco={fondoBlanco}>
			{spinner ? (
				<Spinner />
			) : !formulario ? (
				<ContendorClima className="imagen-fondo ">
					{<ClimaSidebar />}
				</ContendorClima>
			) : (
				<div className="animate__animated animate__slideInLeft animate__faster">
					<Buscador />
				</div>
			)}
		</Aside>
	);
};

export default SideBar;

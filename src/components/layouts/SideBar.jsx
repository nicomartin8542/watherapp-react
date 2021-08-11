import React, {useContext} from "react";
import styled from "@emotion/styled";
import ClimaSidebar from "../ui/ClimaSidebar";
import Buscador from "../ui/Buscador";
import ClimaContext from "../../context/clima/climaContext";
import Spinner from "../spinner/Spinner";

const ContendorClima = styled.div`
	@media screen and (min-width: 1000px) {
		animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 1s; /* don't forget to set a duration! */
	}
`;

const SideBar = () => {
	//Inicializo context de clima
	const climaContext = useContext(ClimaContext);

	//Extraigo variables y funciones del state de climaContext
	const {formulario, spinner} = climaContext;

	return (
		<aside>
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
		</aside>
	);
};

export default SideBar;

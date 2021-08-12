import React, {useContext, useEffect} from "react";
import styled from "@emotion/styled";
import * as moment from "moment";
import "moment/locale/es";
import ClimaContext from "../../context/clima/climaContext";
import {formatearMayuscula} from "../../utils/util";
import BotonFondo from "../styled/BotonFondo";

const ContenedorClima = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto 0;
	position: relative;
`;

const ClimaImg = styled.img`
	height: auto;
	width: 40%;
	background-size: 1px;
	background-repeat: no-repeat;
	align-content: center;
	margin-top: 4rem;
	margin-bottom: 8rem;

	@media screen and (max-width: 768px) {
		margin: 1rem 0 2rem 1rem;
		width: auto 0;
	}

	@media screen and (max-width: 880px) {
		margin: 1rem 0 2rem 1rem;
		width: auto 0;
	}

	@media screen and (max-width: 767px) {
		margin-right: 3rem;
	}
`;

const DatosClima = styled.p`
	font-weight: 700;
	font-size: 4rem;
	text-align: center;
	margin: 0;

	span {
		font-size: 4rem;
		font-weight: 200;
		font-family: "PT Sans", sans-serif;
	}

	@media screen and (min-width: 768px) {
		margin-top: 1rem;
		font-size: 7rem;
	}
`;

const DatosUbicacion = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;

	p {
		font-size: 2rem;
		text-align: center;
	}

	p span {
		font-weight: 700;
	}

	.material-icons {
		margin-right: 1rem;
	}

	@media screen and (max-width: 768px) {
		margin-top: 1rem;
	}
`;

const BuscarBtn = styled.button`
	padding: 1rem;
	margin-top: 2rem;
	align-items: center;
	background-color: ${(props) =>
		props.btnBlanco ? "var(--blanco)" : "var(--gris)"};
	border-radius: 4px;
	margin-right: 25rem;
	color: ${(props) =>
		props.btnBlanco ? "var(--azulOscuro)" : "var(--blanco)"};
	font-weight: 700;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	span {
		cursor: pointer;
		display: inline-block;
		transition: 0.3s;
	}

	/* span:after {
		content: ">>";
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	} */

	&:hover {
		cursor: pointer;
	}

	&:hover span {
		padding: 0 5px;
	}

	&:hover span:after {
		opacity: 1;
		right: 0;
	}

	@media screen and (max-width: 480px) and (min-width: 768px) {
		margin-left: 2rem;
		margin-right: 0;
	}

	@media screen and (max-width: 900px) {
		margin-right: 0;
	}
`;

const ClimaSidebar = () => {
	//Inicializo context
	const climaContext = useContext(ClimaContext);

	//Obtenego variables
	const {
		cambiarFondo,
		cargarFormulario,
		calcularTemperatura,
		climaSidebar,
		medidas,
		temperatura,
		fondoBlanco,
	} = climaContext;

	useEffect(() => {
		if (climaSidebar) {
			calcularTemperatura(climaSidebar.main.temp, medidas);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [climaSidebar, medidas]);

	if (!climaSidebar) return null;

	return (
		<ContenedorClima>
			<BuscarBtn
				type="button"
				btnBlanco={fondoBlanco}
				onClick={() => cargarFormulario()}
			>
				<span>Buscar Localizacion</span>
			</BuscarBtn>

			<BotonFondo btnBlanco={fondoBlanco} onClick={() => cambiarFondo()}>
				Fondo
			</BotonFondo>
			<ClimaImg src={`img/${climaSidebar.weather[0].icon}.png`} alt="Soleado" />
			<DatosClima>
				{temperatura}°{medidas}
			</DatosClima>
			<DatosClima>
				<span>{formatearMayuscula(climaSidebar.weather[0].description)}</span>
			</DatosClima>
			<DatosUbicacion>
				<p>
					Hoy -{" "}
					<span>{formatearMayuscula(moment().format("dddd, Do MMMM"))}</span>
				</p>
				<p>
					<span className="material-icons">location_on </span>
					{climaSidebar.name}
				</p>
			</DatosUbicacion>
		</ContenedorClima>
	);
};

export default ClimaSidebar;

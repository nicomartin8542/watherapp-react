import React, {Fragment, useContext, useEffect, useState} from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import ClimaContext from "../../context/clima/climaContext";

const Contenedor = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	margin-bottom: 1rem;
	background-color: var(--azulClaro);
	flex: 0 0 calc(40% - 2rem);

	@media screen and (max-width: 1048px) {
		flex: 0 0 calc(50% - 2rem);
	}

	@media screen and (max-width: 480px) {
		flex: 0 0 calc(90%);
	}
`;

const Titulo = styled.p`
	font-weight: 500;
	font-size: 18px;
`;

const Valor = styled.p`
	font-weight: 700;
	font-size: 35px;
	margin: 0;
`;

const Hightlights = () => {
	//Context del componente
	const [temp, addTemp] = useState({
		max: 0,
		min: 0,
	});

	//Declaro context del clima
	const climaContext = useContext(ClimaContext);

	//Extraigo variables
	const {climaSidebar, medidas} = climaContext;

	useEffect(() => {
		if (climaSidebar) {
			if (medidas === "F") {
				addTemp({
					...temp,
					min: Math.round(
						parseFloat(
							1.8 * (climaSidebar.main.temp_min - 273) + 32,
							10,
						).toFixed(2),
					),
					max: Math.round(
						parseFloat(
							1.8 * (climaSidebar.main.temp_max - 273) + 32,
							10,
						).toFixed(2),
					),
				});
			} else {
				addTemp({
					...temp,
					max: Math.round(
						parseFloat(climaSidebar.main.temp_max - 273, 10).toFixed(2),
					),
					min: Math.round(
						parseFloat(climaSidebar.main.temp_min - 273, 10).toFixed(2),
					),
				});
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [climaSidebar, medidas]);

	if (!climaSidebar) return null;

	return (
		<Fragment>
			<h1
				css={css`
					padding: 1rem;
				`}
			>
				Estadisticas
			</h1>
			<Contenedor>
				<Card>
					<Titulo>Velocidad Viento</Titulo>
					<Valor> {Math.ceil(climaSidebar.wind.speed * 3.6)} KmH</Valor>
				</Card>
				<Card>
					<Titulo>Humedad</Titulo>
					<Valor>{climaSidebar.main.humidity}%</Valor>
				</Card>
				<Card>
					<Titulo>Temperatura Maxima</Titulo>
					<Valor>
						{temp.max}°{medidas}
					</Valor>
				</Card>
				<Card>
					<Titulo>Temperatura Minima</Titulo>
					<Valor>
						{temp.min}°{medidas}
					</Valor>
				</Card>
			</Contenedor>
		</Fragment>
	);
};

export default Hightlights;

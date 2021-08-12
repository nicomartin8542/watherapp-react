import React, {Fragment, useContext} from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as moment from "moment";
import "moment/locale/es";
import ClimaContext from "../../context/clima/climaContext";
import {formatearMayuscula} from "../../utils/util";

const ContenedorDias = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const CardDias = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) =>
		props.btnBlanco ? "var(--gris4)" : "var(--azulClaro);"};
	color: ${(props) =>
		props.btnBlanco ? "var(--azulOscuro)" : "var(--blanco);"};
	padding: 0 2rem 0rem 2rem;
	margin-bottom: 1rem;
	font-family: "Roboto", sans-serif;
	font-weight: 700;

	flex: 0 0 calc(20% - 2rem);

	@media screen and (max-width: 1300px) {
		flex: 0 0 calc(50% - 2rem);
	}
	@media screen and (max-width: 1048px) {
		flex: 0 0 calc(50% - 2rem);
	}

	@media screen and (max-width: 768px) {
		flex: 0 0 calc(50% - 2rem);
	}
`;

const Temperatura = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: "Roboto", sans-serif;
	font-weight: 700;

	span {
		margin-left: 1rem;

		color: ${(props) =>
			props.btnBlanco ? "var(--blancoPrincipal)" : "var(--gris);"};
	}
`;

const ImagenClima = styled.img`
	width: 70%;
	height: auto;
	margin: 0;
	@media screen and (max-width: 768px) {
		width: 40%;
	}

	@media screen and (max-width: 480px) {
		width: 35%;
	}
`;

const Dias = () => {
	//Inicializo context
	const climaContext = useContext(ClimaContext);

	//Obtenego variables
	const {climasPrevision, medidas, fondoBlanco} = climaContext;

	const calcularTemperatura = (medidas, temp_max, temp_min) => {
		let min;
		let max;

		if (medidas === "F") {
			min = Math.round(parseFloat(1.8 * (temp_min - 273) + 32, 10).toFixed(2));
			max = Math.round(parseFloat(1.8 * (temp_max - 273) + 32, 10).toFixed(2));
		} else {
			min = Math.round(parseFloat(temp_min - 273, 10).toFixed(2));
			max = Math.round(parseFloat(temp_max - 273, 10).toFixed(2));
		}
		return {min, max};
	};

	if (!climasPrevision) return null;

	return (
		<Fragment>
			<h1
				css={css`
					padding: 1rem;
				`}
			>
				Proximos dias
			</h1>
			<ContenedorDias>
				{climasPrevision.daily.map((d, index) => {
					if (index >= 1 && index <= 5) {
						let temp = calcularTemperatura(medidas, d.temp.max, d.temp.min);
						return (
							<CardDias key={d.dt} btnBlanco={fondoBlanco}>
								{index === 1 ? (
									<p>Mañana</p>
								) : (
									<p>
										{formatearMayuscula(
											moment(new Date(d.dt * 1000)).format("ddd Do MMM"),
										)}
									</p>
								)}
								<ImagenClima
									src={`/img/${d.weather[0].icon}.png`}
									alt={`${d.weather[0].main}`}
									title={`${formatearMayuscula(d.weather[0].description)}`}
								/>
								<Temperatura btnBlanco={fondoBlanco}>
									<p>
										{temp.max}°{medidas}{" "}
										<span>
											{temp.min}°{medidas}
										</span>
									</p>
								</Temperatura>
							</CardDias>
						);
					}
					return null;
				})}
			</ContenedorDias>
		</Fragment>
	);
};

export default Dias;

import React, {useState, useContext, useEffect} from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import ClimaContext from "../../context/clima/climaContext";
import AlertaContext from "../../context/alertas/alertaContext";
import Alerta from "../styled/Alerta";

const ContenedorForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;
	margin-bottom: 2rem;
	width: 100%;
`;

const InputText = styled.input`
	padding: 1rem 3rem;
	border-radius: 5px;
	color: var(--blanco);
	font-weight: 700;
	text-align: left;
	background-color: ${(props) =>
		props.btnBlanco ? "var(--gris)" : "var(--azulClaro)"};
	border: 1px solid var(--gris);
	width: 100%;
	margin-bottom: 2rem;
	::placeholder {
		color: var(--blanco);
	}
`;

const Select = styled.select`
	padding: 1rem;
	text-decoration: none;
	width: 100%;
	font-weight: 700;
	margin-bottom: 2rem;
	border-radius: 5px;
	background-color: ${(props) =>
		props.btnBlanco ? "var(--gris)" : "var(--azulClaro)"};
	border: 1px solid var(--gris);
	color: var(--blanco);
`;

const BotonSubmit = styled.button`
	padding: 1rem;
	border: none;
	background-color: var(--azul);
	color: var(--blanco);
	border-radius: 5px;
	display: block;
	width: 100%;

	@media screen and (max-width: 480px) {
		margin-top: 1rem;
		padding: 1rem 39%;
	}

	&:hover {
		cursor: pointer;
		font-size: 15px;
	}
`;

const FormBuscador = () => {
	//Declaro state loca
	const [ubicacion, addUbicacion] = useState({
		city: "",
		country: "",
	});

	const {city, country} = ubicacion;

	//Creo state del context de clima
	const climaContext = useContext(ClimaContext);
	const {obtenerClima, msgError, fondoBlanco} = climaContext;

	//State del context de alerta
	const alertaContext = useContext(AlertaContext);
	const {mostrarAlerta, alerta} = alertaContext;

	useEffect(() => {
		mostrarAlerta(msgError);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [msgError]);

	const onChange = (e) => {
		addUbicacion({
			...ubicacion,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		//Valido formulario
		if (city.trim() === "" || country === "") {
			const alerta = {
				msg: "Todos los campos son obligatorios",
				categoria: "#cf4b3d",
			};
			mostrarAlerta(alerta);
			return;
		}

		//Si pasa validacion ejecuto consulta appi
		obtenerClima(ubicacion);
	};

	return (
		<form
			css={css`
				width: 80%;
			`}
			onSubmit={onSubmit}
		>
			<ContenedorForm>
				{alerta ? (
					<Alerta categoria={alerta.categoria}>
						<p>{alerta.msg}</p>
					</Alerta>
				) : null}

				<InputText
					btnBlanco={fondoBlanco}
					type="text"
					placeholder="Buscar Ubicacion"
					name="city"
					id="city"
					value={city}
					onChange={(e) => onChange(e)}
				/>

				<Select
					btnBlanco={fondoBlanco}
					className="form-select"
					aria-label="Default select example"
					name="country"
					id="country"
					value={country}
					onChange={(e) => onChange(e)}
				>
					<option value="">-- Seleccione un pais--</option>
					<option value="US">Estados Unidos</option>
					<option value="MX">México</option>
					<option value="AR">Argentina</option>
					<option value="CO">Colombia</option>
					<option value="CR">Costa Rica</option>
					<option value="ES">España</option>
					<option value="PE">Perú</option>
				</Select>

				<BotonSubmit type="submit">Buscar</BotonSubmit>
			</ContenedorForm>
		</form>
	);
};

export default FormBuscador;

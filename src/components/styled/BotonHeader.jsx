import styled from "@emotion/styled";

const BotonMetric = styled.button`
	padding: 1rem;
	margin-left: 1rem;
	border-radius: 20px;
	background-color: ${(props) =>
		props.select
			? props.btnBlanco
				? "var(--azulOscuro)"
				: "var(--blancoBoton)"
			: props.btnBlanco
			? "var(--gris4)"
			: "var(--azulGris)"};
	color: ${(props) =>
		props.select
			? props.btnBlanco
				? "var(--blanco)"
				: "var(--azulOscuro)"
			: props.btnBlanco
			? "var(--azulOscuro)"
			: "var(--blanco)"};
	border: none;
	text-align: center;
	font-size: 15px;
	font-weight: 700;

	&:hover {
		cursor: pointer;
		${(props) => (!props.select ? "background-color: var(--gris)" : null)};
	}
`;

export default BotonMetric;

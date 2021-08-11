import styled from "@emotion/styled";

const BotonMetric = styled.button`
	padding: 1rem;
	margin-left: 1rem;
	border-radius: 20px;
	background-color: ${(props) =>
		props.select ? "var(--blancoBoton)" : "var(--azulGris)"};
	color: ${(props) => (props.select ? "#000" : "var(--blanco)")};
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

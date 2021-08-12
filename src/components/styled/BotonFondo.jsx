import styled from "@emotion/styled";

const BotonFondo = styled.button`
	background-image: ${(props) =>
		props.btnBlanco
			? "url('/img/dark_mode_2.png')"
			: "url('/img/light_mode_2.png')"};
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 2rem;
	border: none;
	background-color: ${(props) =>
		props.btnBlanco ? "var(--gris4)" : "var(--azulClaro)"};
	border-radius: 20px;
	position: absolute;
	right: 1rem;
	top: 22px;
	text-indent: -99999px;

	&:hover {
		cursor: pointer;
	}
`;

export default BotonFondo;

import styled from "@emotion/styled";

const Alerta = styled.div`
	margin-bottom: 2rem;
	background-color: ${(props) => (props.categoria ? props.categoria : "red")};
	width: 100%;
	border-radius: 5px;
	p {
		text-align: center;
		font-family: "Roboto", sans-serif;
		font-weight: 700;
		font-size: 20px;
	}
`;

export default Alerta;

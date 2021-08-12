import React, {useContext, useEffect} from "react";
import styled from "@emotion/styled";
import SideBar from "../layouts/SideBar";
import Header from "../layouts/Header";
import ClimaContext from "../../context/clima/climaContext";

const SeccionP = styled.div`
	background-color: ${(props) =>
		props.bdBlanco ? "var(--blancoPrincipal)" : "var(--azulOscuro)"};
	color: ${(props) => (props.bdBlanco ? "var(--azulOscuro)" : "var(--blanco)")};
	flex: 1;
`;

const Layout = (props) => {
	//Declaro context
	const climaContext = useContext(ClimaContext);

	//Extraigo variables
	const {obtenerClimaDefecto, climaSidebar, fondoBlanco} = climaContext;

	//Cargo clima por defecto
	useEffect(() => {
		if (!climaSidebar) {
			obtenerClimaDefecto();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="contenedor-app">
			<SideBar />

			<SeccionP bdBlanco={fondoBlanco}>
				<Header />
				<div className="animate__animated animate__fadeInDown">
					<main>{props.children}</main>
				</div>
			</SeccionP>
		</div>
	);
};

export default Layout;

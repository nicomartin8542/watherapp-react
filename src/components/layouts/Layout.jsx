import React, {useContext, useEffect} from "react";
import SideBar from "../layouts/SideBar";
import Header from "../layouts/Header";
import ClimaContext from "../../context/clima/climaContext";

const Layout = (props) => {
	//Declaro context
	const climaContext = useContext(ClimaContext);

	//Extraigo variables
	const {obtenerClimaDefecto, climaSidebar} = climaContext;

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

			<div className="seccion-principal ">
				<Header />
				<div className="animate__animated animate__fadeInDown">
					<main>{props.children}</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;

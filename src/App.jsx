import React from "react";
import Layout from "./components/layouts/Layout";
import Principal from "./components/layouts/Principal";
import ClimaState from "./context/clima/climaState";
import AlertaState from "./context/alertas/alertaState";

function App() {
	return (
		<ClimaState>
			<AlertaState>
				<Layout>
					<Principal />
				</Layout>
			</AlertaState>
		</ClimaState>
	);
}

export default App;

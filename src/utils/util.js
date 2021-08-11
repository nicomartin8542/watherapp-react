export const formatearMayuscula = (str) => {
	const arrStr = str.split(" ");
	let strFormated = "";
	arrStr.forEach((e) => {
		strFormated = `${strFormated} ${e.charAt(0).toUpperCase()}${e.slice(1)}`;
	});

	return strFormated;
};

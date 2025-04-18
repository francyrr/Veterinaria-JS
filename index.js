const { registrar, leer } = require("./operaciones.js");

const [ , , operacion, nombre, edad, tipo, color, enfermedad ] = process.argv;

if (operacion === "registrar") {
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log("❌ Faltan argumentos para registrar una cita.");
    } else {
        registrar(nombre, edad, tipo, color, enfermedad);
    }
}

if (operacion === "leer") {
    leer();
}

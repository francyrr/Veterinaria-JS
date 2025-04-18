const fs = require("fs");

const leerCitas = () => {
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error leyendo el archivo:", error);
        return [];
    }
};

const guardarCitas = (citas) => {
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf8");
};

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = leerCitas();
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad,
    };
    citas.push(nuevaCita);
    guardarCitas(citas);
    console.log("✅ Cita registrada correctamente.");
};

const leer = () => {
    const citas = leerCitas();
    console.log("📋 Lista de citas registradas:");
    citas.forEach((cita, index) => {
        console.log(
            `${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`
        );
    });
};
module.exports = {
    registrar,
    leer
};
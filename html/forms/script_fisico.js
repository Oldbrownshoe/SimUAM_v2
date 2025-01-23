document.getElementById('formularioCondiciones').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const usaLentes = document.getElementById('usaLentes').value;
    const problemasVision = document.getElementById('problemasVision').value;
    const problemasAuditivos = document.getElementById('problemasAuditivos').value;
    const problemasMovilidad = document.getElementById('problemasMovilidad').value;
    const sillaRuedas = document.getElementById('sillaRuedas').value;
    const enfermedades = document.getElementById('enfermedades').value;
    const medicamentos = document.getElementById('medicamentos').value;
    const alergias = document.getElementById('alergias').value;

    let resultado = `<p>Nombre: ${nombre}</p>`;
    resultado += `<p>Edad: ${edad}</p>`;
    resultado += `<p>Género: ${genero}</p>`;
    resultado += `<p>Altura: ${altura} cm</p>`;
    resultado += `<p>Peso: ${peso} kg</p>`;

    if (usaLentes === 'si') {
        resultado += `<p>Recomendación: Uso de lentes durante la simulación. Entrenamiento en reconocimiento de rutas de escape visuales.</p>`;
    } else {
        resultado += `<p>Recomendación: Entrenamiento estándar en rutas de escape visuales.</p>`;
    }

    if (problemasVision === 'si') {
        resultado += `<p>Recomendación: Entrenamiento en uso de señales auditivas durante la simulación.</p>`;
    }

    if (problemasAuditivos === 'si') {
        resultado += `<p>Recomendación: Entrenamiento en uso de señales visuales durante la simulación.</p>`;
    }

    if (problemasMovilidad === 'si') {
        resultado += `<p>Recomendación: Entrenamiento en procedimientos de evacuación asistida.</p>`;
    }

    if (sillaRuedas === 'si') {
        resultado += `<p>Recomendación: Entrenamiento en maniobras de emergencia con silla de ruedas y reconocimiento de rutas accesibles.</p>`;
    }

    if (enfermedades !== 'ninguna') {
        resultado += `<p>Recomendación: Consulta médica antes de la simulación y entrenamiento adaptado a la condición específica.</p>`;
    }

    if (medicamentos === 'si') {
        resultado += `<p>Recomendación: Llevar medicación necesaria durante la simulación.</p>`;
    }

    if (alergias === 'si') {
        resultado += `<p>Recomendación: Tener a la mano tratamientos para alergias en caso de emergencia.</p>`;
    }

    if (usaLentes === 'no' && problemasVision === 'no' && problemasAuditivos === 'no' && problemasMovilidad === 'no' && sillaRuedas === 'no' && enfermedades === 'ninguna') {
        resultado += `<p>Participante apto para la simulación estándar sin adaptaciones.</p>`;
    }

    document.getElementById('resultados').innerHTML = resultado;
});

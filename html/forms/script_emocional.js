document.getElementById('formularioCondiciones').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const calma = document.getElementById('calma').value;
    const lider = document.getElementById('lider').value;
    const sigue = document.getElementById('sigue').value;
    const estres = document.getElementById('estres').value;
    const decisiones = document.getElementById('decisiones').value;

    let resultado = `<p>Nombre: ${nombre}</p>`;
    resultado += `<p>Edad: ${edad}</p>`;
    resultado += `<p>Género: ${genero}</p>`;

    if (calma === 'siempre') {
        resultado += `<p>Recomendación: Perfecto para liderar grupos en simulaciones de sismos.</p>`;
    } else if (calma === 'a_veces') {
        resultado += `<p>Recomendación: Participar en ejercicios de respiración y manejo del estrés.</p>`;
    } else {
        resultado += `<p>Recomendación: Entrenamiento intensivo en manejo de crisis.</p>`;
    }

    if (lider === 'si') {
        resultado += `<p>Recomendación: Capacitación adicional para liderar evacuaciones.</p>`;
    }

    if (sigue === 'si') {
        resultado += `<p>Recomendación: Enfocarse en seguir instrucciones claras durante simulaciones.</p>`;
    }

    if (estres === 'siempre') {
        resultado += `<p>Recomendación: Realizar simulaciones progresivas para acostumbrarse al entorno.</p>`;
    } else if (estres === 'a_veces') {
        resultado += `<p>Recomendación: Entrenamiento en identificación de puntos seguros rápidamente.</p>`;
    }

    if (decisiones === 'si') {
        resultado += `<p>Recomendación: Entrenamiento para escenarios complejos y rápidos.</p>`;
    } else {
        resultado += `<p>Recomendación: Prácticas de toma de decisiones bajo presión.</p>`;
    }

    document.getElementById('resultados').innerHTML = resultado;
});

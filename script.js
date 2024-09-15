// parte 1: Agregar/Quitar borde rojo
const imagen = document.getElementById('miImagen');
imagen.addEventListener('click', function() {
    if (imagen.classList.contains('borde-rojo')) {
        imagen.classList.remove('borde-rojo');
    } else {
        imagen.classList.add('borde-rojo');
    }
});

// parte 2: Seleccionar stickers
document.getElementById('calcular').addEventListener('click', function() {
    const stickers1 = parseInt(document.getElementById('stickers1').value) || 0;
    const stickers2 = parseInt(document.getElementById('stickers2').value) || 0;
    const stickers3 = parseInt(document.getElementById('stickers3').value) || 0;

    const total = stickers1 + stickers2 + stickers3;
    const resultado = document.getElementById('resultado');

    if (total > 10) {
        resultado.textContent = 'Llevas demasiados stickers';
    } else {
        resultado.textContent = `Llevas ${total} stickers`;
    }
});

// parte 3: Verificar contraseña 
document.getElementById('verificar').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    const password = '' + num1 + num2 + num3;
    const resultadoPassword = document.getElementById('resultadoPassword');

    if (password === '911') {
        resultadoPassword.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultadoPassword.textContent = 'Password 2 correcto';
    } else {
        resultadoPassword.textContent = 'Password incorrecto';
    }
});

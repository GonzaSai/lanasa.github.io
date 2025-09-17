//Foto del día
const contenedorDia = document.querySelector('#contenedorDia');
const imagenDia = document.querySelector('#imgDia');
const botonDia = document.querySelector('#btnDia');
const apiKey = 'boCaoq34r3V8rSez6wzY00DeYaHKjt7iAw4PLaDB'; 
const tituloDia = document.querySelector('#tituloDia');

botonDia.onclick = function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => res.json())
    .then(fotoDia => {
        imagenDia.src = fotoDia.hdurl;
        tituloDia.textContent = fotoDia.title;
        contenedorDia.innerHTML = `${contenedorDia.innerHTML} <p>${fotoDia.explanation}</p>`;
    });
}

//Foto fecha específica
const contenedorFecha = document.querySelector('#contenedorFecha');
const botonFecha = document.querySelector('#btnFecha');
const inputFecha = document.querySelector('#inputFecha');
const tituloFecha = document.querySelector('#tituloFecha');
botonFecha.onclick = function() {
    console.log(inputFecha.value);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputFecha.value}`)
    .then(res => res.json())
    .then(fotoFecha => {
        if (fotoFecha.code) {
            tituloFecha.textContent = "Error";
            contenedorFecha.innerHTML = `<p>Fecha inválida o fuera de rango. Intenta con otra fecha.</p>`;
        } else {
            tituloFecha.textContent = fotoFecha.title;
            contenedorFecha.innerHTML = `<img id="imgFecha" src="${fotoFecha.hdurl}" alt=""> <p>${fotoFecha.explanation}</p>`;
        }
    });
}

//Foto rango de fechas
const contendedorRango = document.querySelector('#contenedorRango');
const botonRango = document.querySelector('#btnRango');
const inputInicio = document.querySelector('#inputStart');
const inputFinal = document.querySelector('#inputEnd')
const tituloRango = document.querySelector('#tituloRango');

botonRango.onclick = function() {
    console.log(inputInicio.value & inputFinal.value);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${inputInicio.value}&end_date=${inputFinal.value}`)
    .then(res => res.json())
    .then(fotoRango => {
        if (fotoRango.code) {
            tituloRango.textContent = "Error";
            contenedorRango.innerHTML = `<p>Fecha inválida o fuera de rango. Intenta con otra fecha.</p>`;
        } else {
            tituloRango.textContent = fotoRango.title;
            contenedorRango.innerHTML = `<img id="imgRango" src="${fotoRango.hdurl}" alt=""> <p>${fotoRango.explanation}</p>`;
        }
    });
}

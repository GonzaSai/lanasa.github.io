//Foto del día
let contenedorDia = document.querySelector('#contenedorDia');
let imagenDia = document.querySelector('#imgDia');
let botonDia = document.querySelector('#btnDia');
let apiKey = 'boCaoq34r3V8rSez6wzY00DeYaHKjt7iAw4PLaDB'; 
let tituloDia = document.querySelector('#tituloDia');

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
let tituloFecha = document.querySelector('#tituloFecha');
let contenedorFecha = document.querySelector('#contenedorFecha');
let botonFecha = document.querySelector('#btnFecha');
let inputFecha = document.querySelector('#inputFecha');
botonFecha.onclick = function() {
    console.log(inputFecha.value);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputFecha.value}`)
    .then(res => res.json())
    .then(fotoFecha => {
        if (fotoFecha.code) {
            // Si hay un error, mostrar mensaje
            tituloFecha.textContent = "Error";
            contenedorFecha.innerHTML = `<p>Fecha inválida o fuera de rango. Intenta con otra fecha.</p>`;
        } else {
            tituloFecha.textContent = fotoFecha.title;
            contenedorFecha.innerHTML = `<img id="imgFecha" src="${fotoFecha.hdurl}" alt=""> <p>${fotoFecha.explanation}</p>`;
        }
    });
}

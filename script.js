const divDestinos= document.getElementById("divDestinos")
fetch('./json/paquetes.json')
.then(response => response.json())
.then(destinos =>{
    destinos.forEach((destino, indice) => {
        divDestinos.innerHTML +=`
        <div id="destino${indice}" class="card lugares" style="width: 18rem;">
            <img src="./img/${destino.img}" class="card-img-top imgCard" alt="...">
            <div class="card-body">
                <h5 class="card-title">${destino.destino}</h5>
                <p class="card-text">Origen: ${destino.origen}</p>
                <p class="card-text">Salida: ${destino.salida}</p>
                <p class="card-text">Hotel: ${destino.hotel}</p>
                <p class="card-text">Noches: ${destino.noches}</p>
                <p class="card-text">Precio: ${destino.precio}</p>
                <button class =" btn btn-dark">Comprar</button>
            </div>
        </div>`
    });
})
async function mostrarDestinos() {
    const destinos = await fetch("./json/paquetes.json")
    const destinosParseados= await destinos.json()
    console.log(destinosParseados)
    return destinosParseados
}
mostrarDestinos()
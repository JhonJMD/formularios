const frmRegistro = document.querySelector('#frmData');
const frmRegistroV = document.querySelector('#frmDataV');
const datosMostradosDiv = document.querySelector('#viewData');

document.querySelector('#btnGuardar').addEventListener("click", (e) =>{
    const datos = Object.fromEntries(new FormData(frmRegistro).entries());
    let data = JSON.parse(JSON.stringify(datos));
    const parrafo = document.createElement('p');
    parrafo.textContent = `${data.nombre}`;
    datosMostradosDiv.innerHTML = '';
    datosMostradosDiv.appendChild(parrafo);
    e.preventDefault();
    e.stopImmediatePropagation();
});

document.querySelector('#btnVer').addEventListener("click", (e) =>{
    const datos = Object.fromEntries(new FormData(frmRegistroV).entries());
    let data = JSON.parse(JSON.stringify(datos));
    console.log(JSON.stringify(datos));

    Object.entries(data).forEach(([clave,valor]) => {
        const parrafo = document.createElement('p');
        parrafo.textContent = ` ${clave} - ${valor}`;
        datosMostradosDiv.appendChild(parrafo);
    });
    e.preventDefault();
});
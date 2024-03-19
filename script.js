let Nombre = document.getElementById('Nombre');
let Email = document.getElementById('Email');
let Fecha = document.getElementById('Fecha');
let btn = document.getElementById('btn');
let ListaUsuarios = [];
let listaContainer = document.querySelector('.lista');

btn.addEventListener('click', () => {
    ListaUsuarios.push({
        "Nombre": Nombre.value,
        "Email": Email.value,
        "Fecha": Fecha.value
    });
    mostrarUsuarios();
});

function mostrarUsuarios() {
    listaContainer.innerHTML = ''; // Limpiar la lista antes de volver a mostrar los usuarios
    ListaUsuarios.forEach((usuario, index) => {
        let listItem = document.createElement('ul');
        listItem.innerHTML = `
            <li>${index + 1}</li>
            <li>${usuario.Nombre}</li>
            <li>${usuario.Email}</li>
            <li>${usuario.Fecha}</li>
            <li><button onclick="eliminarUsuario(${index})">Eliminar</button></li>
        `;
        listaContainer.appendChild(listItem);
    });
}

function eliminarUsuario(index) {
    ListaUsuarios.splice(index, 1);
    mostrarUsuarios();
}

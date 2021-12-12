'use strict';
//-----------------MOSTRAR Y OCULTAR EL BOTON HAMBURGUESA------------------//

// 1- traer los elementos que necesito de HTML
const menuDropDown = document.querySelector('.js-menudropdown');//form class= "menudropdown"
const linkDropDown = document.querySelector('.js-linkdropdown');//a class= "header__menulink"


// 3- Crear las funciones que necesito para mostrar u ocultar el menu
function showDropDown() {
  menuDropDown.classList.remove('collapsed');//funcion para mostrar el menu
}
function hideDropDown(){
  menuDropDown.classList.add('collapsed');//funcion para ocultar el menu
}
function toggleDropDown(){ //mostrar u ocultar dependiendo de su estado actual
  if (menuDropDown.classList.contains('collapsed')){
    showDropDown();
  }
  else {
    hideDropDown();
  }
}

// 4 - Crear la funcion manejadora del evento

function handleClickLinkDropDown(event) {
  event.preventDefault();
  toggleDropDown();
}


// 2- Evento que quiero hacer ( que al pulsar el boton de hamburguesa se muestre el menu) 
linkDropDown.addEventListener('click',handleClickLinkDropDown);

//--------------------------------------------------------------------------//

//----------------BOTON DE VISTA TARJETA Y VISTA TABLA----------------------//

// 1- traer los elementos que necesito de HTML
const buttonShowCardView = document.querySelector('.js-cardviewbutton');
const buttonShowTable = document.querySelector ('.js-tablebutton');
const boardData = document.querySelector ('.js-boardata');

// 3- Crear las funciones que necesito para mostrar la vista tarjeta o vista tabla
function setCardListView(){ //cambia el modo de vista de tabla a tarjeta
  boardData.classList.remove('tableview');
  boardData.classList.add('listview');
}
function setTableView(){ //cambia el modo de vista de tarjeta a tabla
  boardData.classList.remove('listview');
  boardData.classList.add('tableview');
}

// 4 - Crear las funciones manejadoras del evento vista tarjeta y vista tabla
function handleClickShowCardView (event){
  event.preventDefault();
  
  setCardListView();
  buttonShowTable.classList.remove('selected'); //resaltar el boton
  buttonShowCardView.classList.add('selected');
}

function handleClickShowTable (event) {
  event.preventDefault();

  setTableView();
  buttonShowCardView.classList.remove('selected');//resaltar el boton
  buttonShowTable.classList.add('selected');
}


// 2- Evento que quiero hacer ( que al pulsar el boton de Vista Tarjetas se muestre de esa forma, lo mismo para el boton de Vista Tabla) 
buttonShowCardView.addEventListener('click', handleClickShowCardView);
buttonShowTable.addEventListener ('click', handleClickShowTable);

//---------------------------------------------------------------------------//

//------------------BOTON AÑADIR NUEVA ENTRADA-----------------------------//

// 1- traer los elementos que necesito de HTML
const buttonAdd = document.querySelector('.js-buttonadd');
const sectionAdd = document.querySelector('.js-sectionadd');


// 3- Crear las funciones que necesito para añadir una nueva entrada de datos
function showAddForm() {
  sectionAdd.classList.remove('hidden');
}


// 2- Evento que quiero hacer ( que al pulsar el boton de Nuevo me aparezca el formulario)
buttonAdd.addEventListener('click', showAddForm);
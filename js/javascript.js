document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.getElementById('nav-list');
  if (navList.style.display === 'flex') {
    navList.style.display = 'none';
  } else {
    navList.style.display = 'flex';
  }
});
/* -La función JavaScript se activa cuando se hace clic en el ícono del menú hamburguesa (conocido como 'mobile-menu').
-Selecciona la lista de navegación (nav-list) por su ID.
-Si la lista de navegación ya está visible (es decir, tiene estilo 'flex'), la función la oculta estableciendo su estilo a 'none'.
-Si la lista de navegación está oculta (sin estilo 'flex'), la función la muestra estableciendo su estilo a 'flex'. */


document.getElementById('changeColorBtn').addEventListener('click', function() {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
/* -Esta función se activa cuando se hace clic en un botón con el ID 'changeColorBtn'.
-Genera un color aleatorio utilizando el método Math.random() para la selección de colores y Math.floor() para redondear el valor.
-Se convierte el valor numérico en una cadena hexadecimal utilizando toString(16).

-Finalmente, establece el color de fondo del cuerpo del documento (document.body.style.backgroundColor) con el color aleatorio generado. */



document.getElementById('changeTitleBtn').addEventListener('click', function() {
  var titles = document.querySelectorAll('.title');
  titles.forEach(function(title) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    title.textContent = 'Título ' + randomNumber;
  });
});
/*  - Cuando se hace clic en el botón con el ID 'changeTitleBtn':
- Selecciona todos los elementos con la clase 'title' utilizando document.querySelectorAll('.title').
- Itera sobre cada título usando forEach.
-Genera un número aleatorio utilizando Math.random(), lo multiplica por 100 y le suma 1 para obtener un número entre 1 y 100.
- Cambia el contenido de texto de cada título a 'Título ' seguido del número aleatorio generado. Cada vez que se hace clic en el botón, se cambiarán los títulos a números aleatorios diferentes. */


var popupTrigger = document.getElementById('popupTrigger');
var popup = document.createElement('div');
popup.classList.add('popup');
popup.textContent = '¡Mensaje Emergente!';
popupTrigger.appendChild(popup);

popupTrigger.addEventListener('mouseover', function() {
  popup.style.display = 'block';
});

popupTrigger.addEventListener('mouseout', function() {
  popup.style.display = 'none';
});

/*  -Seleccionamos el elemento #popupTrigger y creamos un elemento div que será nuestro mensaje emergente.
-  Agregamos una clase popup al mensaje emergente y le asignamos el contenido '¡Mensaje Emergente!'.
-  Cuando el cursor se mueve sobre el #popupTrigger, mostramos el mensaje emergente estableciendo su estilo display a block.
- Cuando el cursor sale del #popupTrigger, ocultamos el mensaje emergente estableciendo su estilo display a none. */ 



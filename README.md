# Book Square

Book Square es un e-commerce de algunas colecciones de libros, realizado para el proyecto final del curso React Js de Coderhouse, finalizado en diciembre de 2021. El proyecto está construido con React Js, utilizando Firebase como base de datos. Por otro lado, se emplea CSS para los estilos y Bootstrap para la barra de navegación.

## Paquetes de instalación

### npm install

Instala la carpeta Node Modules para permitir la inicialización de React App.

### npm install react-bootstrap bootstrap@5.1.3

Librería de Bootstrap para React.

### npm install react-router-dom

Paquete para React-Router para la navegabilidad del sitio.

### npm install firebase

Instalar Firebase.

## Scripts

Este proyecto fue creado con `npx create-react-app`. Para ejecutar la aplicación, utilizar el siguiente comando:

### `npm start` (abre http://localhost:3000 para acceder a la app en el navegador).

## Estructura y componentes

En el componente App.js se encuentra Cart Context Provider y el BrowserRouter. De esta forma, en este componente se encuentran las rutas de navegación y se encapsulan los componentes que pueden consumir el contexto.

### NavBar
Tiene configuradas las rutas hacia los filtros según categoría, y también hacia el elemento CartListContainer.

### ItemListContainer
Realiza una llamada a Firestore para traer los documentos de la colección. En caso de que se haya seleccionado alguna categoría, se traen solo los documentos que contegan la categoría seleccionada. Finalmente, guarda los datos en un array, el cual es enviado al componente ItemList.

### ItemList
Recorre el array de elementos recibido del ItemListContainer y envía al componente Item los datos de id, imagen, nombre, autor y precio.

### Item
Muestra la información de cada producto con los datos recibidos de ItemList. A su vez, tiene una ruta al componente ItemDetailContainer, para ir al detalle del producto.

### ItemDetailContainer
Realiza una llamada a Firestore para traer los datos del documento correspondiente al producto seleccionado en el ItemListContainer. Con los datos obtenidos se construye un objeto, el cual es enviado al componente ItemDetail.

### ItemDetail
Muestra el detalle del producto. Adicional, posee un módulo ItemCount que contiene los botones de incrementar y decrementar unidades para agregar al carrito según el stock. De igual forma, incluye el botón de agregar al carrito, el cual llama a la función addProduct ubicada en CartContext, que se encarga de insertar el elemento en el array cartList. También se actualizan las variables de cantidad total y precio total del carrito. Por otro lado, se activa el botón de terminar compra, que tiene configurada la ruta de navegación hacia el CartListContainer.

### CartListContainer
Muestra el precio total de los productos agregados al carrito. Este componente incluye la opción de vaciar el carrito y un botón que dirige al formulario de compra. Finalmente, recorre el array cartList para enviar al componente Cart los datos de cada producto.

### Cart
Muestra los detalles de cada producto agregado al carrito y contiene la opción de remover el producto del carrito, lo cual se logra mediante la llamada a la función deleteItem, que se encuentra en el CartContext.

### OrderForm
Contiene los campos de entrada en los que el usuario ingresa sus datos y presiona el botón de enviar orden de compra. Este botón llama a una función que guarda en Firestore los datos de la compra, genera un ID de orden de compra que es entregado al usuario, y actualiza el stock de productos de acuerdo con la compra realizada por el usuario.

### CartContext
Provee las funciones para actualizar los productos del carrito (CartList), y también para actualizar las variables de precio total y cantidad de items total de la compra.

## Demo
https://drive.google.com/file/d/1FY4C56bJg6jiBNrGLRCIDX5y_adTBjpq/view?usp=sharing

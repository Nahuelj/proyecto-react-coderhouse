# Ecommerce React 

Este es el proyecto final del curso de React js de coderhouse que se basa en la simulación de un Ecommerce de ropa que trae los productos desde la base de datos y al finalizar cualquier compra sube la orden a la base de datos para su posterior procesamiento (simulación).


## Como correr la aplicación

Para poder utilizar la aplicación y comprobar su correcto funcionamiento primero debe clonar el repositorio en su ordenador y abrirlo con su visualizador de codigo.

Una vez hecho eso abrir una consola que este posicionada en la carpeta del proyecto y correr el siguiente comando 

```bash
  npm start
```

Luego de eso se abrira el navegador con la aplicación corriendo.



## Partes que componen el proyecto

La estructura general del proyecto es una estructura basica que nos brinda create-react-app.

En cuanto a los componentes propiamentes creados para el Ecommerce son los siguientes (los podras encontrar en la carpeta components dentro de src)

 - Cart:

    El componente "Cart" es una representación del carrito de compras en la aplicación React. Utiliza el contexto "CartContext" para acceder a los elementos del carrito, permitiendo mostrar la lista de productos agregados, junto con su nombre, precio, imagen y cantidad. 

 - CartContext:

    El código define un contexto llamado "MyContext" y un proveedor de contexto "MyContextProvider" que ofrece el estado y funciones para administrar un carrito de compras en la aplicación React. Los componentes descendientes pueden acceder a los elementos del carrito, agregar, eliminar y limpiar elementos, así como obtener el total de elementos y el precio total del carrito mediante el hook "useContext".

- CartWidget:
 
    El componente "CartWidget" muestra un ícono de carrito de compras que refleja la cantidad de elementos en el carrito utilizando el contexto "MyContext". El número de elementos se muestra en una notificación visual al lado del ícono. 

 - Checkout:
    
    El componente "Checkout" es una pantalla que permite al usuario completar un formulario con su nombre, correo electrónico y número de teléfono para finalizar la compra de los elementos en el carrito. Al hacer clic en el botón "Comprar", los datos se envían a Firebase para almacenar la orden. Se verifica si el formulario está completo y si hay elementos en el carrito antes de enviar los datos. Si falta información o el carrito está vacío, se muestra una alerta correspondiente.

 - Item:

    El componente "Item" muestra un artículo con su imagen, nombre y precio. Al recibir las propiedades "src", "price", "name" e "id", renderiza un enlace a la página detallada del artículo al hacer clic. Es utilizado para mostrar productos en una lista o grilla, permitiendo a los usuarios acceder a los detalles completos de cada artículo.

 - ItemCart:

    El componente "ItemCart" muestra un artículo del carrito de compras con su imagen, nombre, cantidad y precio. Al recibir las propiedades "img", "nombre", "cantidad", "precio", "id" y "eliminar", renderiza los detalles del artículo junto con un botón "X" para eliminarlo del carrito. Los estilos se aplican mediante las clases definidas en el archivo CSS "ItemCart.module.css".

 - ItemCount:

    El componente "ItemCount" es un contador de cantidad que permite al usuario seleccionar la cantidad de un artículo antes de agregarlo al carrito. Tiene botones para incrementar y decrementar la cantidad, y también permite ingresar manualmente un valor dentro del rango del stock. Al hacer clic en "Agregar al carrito", se informa al componente padre sobre la cantidad elegida y el artículo seleccionado.

 - ItemDetail:
 
    El componente "ItemDetail" muestra los detalles de un artículo, incluyendo su imagen, nombre, precio y color. Utiliza el componente "ItemCount" para permitir al usuario seleccionar la cantidad del artículo que desea agregar al carrito. Este componente es utilizado para mostrar los detalles de un artículo específico y permite al usuario seleccionar la cantidad deseada para agregar al carrito de compras.

 - ItemDetailContainer:

    El componente "ItemDetailContainer" recupera los detalles de un artículo específico desde la base de datos mediante su ID, que se obtiene de los parámetros de la URL. Una vez que obtiene la información, muestra los detalles del artículo utilizando el componente "ItemDetail", el cual muestra el nombre, color, imagen, precio, stock y categoría del artículo. Mientras se carga la información, muestra el mensaje "Loading...". Es utilizado para mostrar los detalles de un artículo específico en la aplicación y forma parte de la funcionalidad de visualización de los detalles de los productos en la página de detalles.

 - ItemList:

    El componente "ItemList" muestra una lista de elementos mediante el componente "Item". Recibe un arreglo de "products" como prop y realiza una verificación para mostrar "Loading..." si la lista de productos está vacía. De lo contrario, mapea cada producto y pasa sus propiedades (ID, nombre, precio e imagen) al componente "Item". Este componente es utilizado para mostrar una lista de productos en la aplicación, y cada producto es representado por el componente "Item".

 - ItemListContainer:

    El componente "ItemListContainer" muestra una lista de productos mediante el componente "ItemList". Utiliza el hook "useEffect" para obtener los productos desde la base de datos de Firebase, dependiendo de si se proporciona un "id" en los parámetros de la URL. Luego, se pasa la lista de productos al componente "ItemList" para su visualización. El título de la lista se muestra utilizando la prop "greeting". Este componente es utilizado para mostrar una lista de productos en la aplicación y su contenido puede variar según el "id" proporcionado en la URL.
    
 - Navbar:

    El componente "Navbar" es una barra de navegación que muestra un logotipo "Json" que redirige a la página principal ("/") al hacer clic. También contiene una lista de enlaces que redirigen a diferentes categorías: "Pantalones", "Remeras" y "Abrigos". Cada enlace tiene una URL que incluye la categoría correspondiente ("/category/Pantalon", "/category/Remera" y "/category/Buzo"). Este componente proporciona una navegación fácil entre las categorías de productos en la aplicación.

- La carpera Firebase:

    Esta carpeta incluye la configuracion basica de la base de datos.
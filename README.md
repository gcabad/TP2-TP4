TP4 – MongoDB & Node.JS

1. En un servicio MongoDB local, crear una base de datos llamada empresa, utilizando 
Mongo Shell (mongo CLI) para realizar esta y todas las acciones (en forma ordenada) 
que se detallan a continuación:
Dentro de esta base, crear las colecciones clientes y productos. 
• En la colección clientes, insertar 5 documentos con los campos nombre, apellido,
edad, telefono y email, con información variada.
• En la colección productos, ingresar 4 documentos con campos nombre, 
descripción, stock y precio. Asignarles valores de relleno y variados a cada uno 
de los documentos.
2. Luego con esos datos almacenados y utlizando Mongo Shell (mongo CLI):
• Listar el nombre de las colecciones contenidas en la base de datos empresa.
• Representar todos los documentos contenidos dentro de las colecciones clientes y 
productos.
• Obtener la cantidad de documentos dentro de cada una de las colecciones.
• Listar todos los clientes ordenados por edad ascendente.
• Listar todos los productos por orden descendente de stock.
• Buscar el producto más caro.
• Ordenar los clientes por nombre alfabéticamente ascendente y mostrar los dos 
primeros resultados.
• Elegir un producto y actualizar su precio.
• Elegir un cliente y eliminarlo.
• Listar todos los productos, ordenados por precio ascendente, mostrando sólo los 
campos nombre y precio.
• Mostrar del listado total de clientes, sólo el nombre y el email
3. Crear un script en Node.JS que utilice MongoDB Driver (mongodb) como 
dependencia javascript que me permita conectarme a la base de datos empresa realizada
anteriormente.
Si la conexión es exitosa, representar en consola el nombre y apellido de cada uno de las 
personas almacenadas en la colección clientes.
Luego le agregará el campo “codigo” a cada uno de los documentos almacenados en la 
colección productos con el valor ‘xxx-xxxxx’ y posteriormente a esta operación, 
mostrará todos los productos almacenados imprimiendo por consola el nombre, precio y 
codigo de cada uno de ellos

ENTREGA:

Instrucciones:

Entregar un zip de la base de datos una vez concluidos los puntos 1 2 y 3.
Entregar un archivo de texto con todas los comandos ejecutados por consola Mongo Shell para cumplir con los puntos 1 y 2.
Entregar el proyecto del script ejecutado en Node.JS para resolver el punto 3.

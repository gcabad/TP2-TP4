import { MongoClient } from "mongodb"

/* 3. Crear un script en Node.JS que utilice MongoDB Driver (mongodb) como 
dependencia javascript que me permita conectarme a la base de datos empresa realizada
anteriormente. */

const client = new MongoClient('mongodb://localhost',{

    useNewUrlParser: true,
    useUnifiedTopology: true
})

let connection = false

try{
    console.log('Conectando a la base de datos...')
    await client.connect()
    connection = true
    console.log('Base de datos conectada!')
}
catch (error){
    console.log('Ocurrio un error creando la conexion.')
}

try {
    if(!connection) throw new Error('No hay conexion disponible')

    const db = client.db('empresa')

    /* Si la conexión es exitosa, representar en consola el nombre y apellido de cada uno de las 
    personas almacenadas en la colección clientes.
     */
    
    let clientes = await db.collection('clientes').find({}).project({_id: 0, nombre: 1, apellido: 1}).toArray()
    console.log(clientes)

    await db.collection('productos').updateMany(
        {},
        {$set: {codigo: 'xxx-xxxxx'}}
    )
    
    let productos = await db.collection('productos').find({}).project({_id: 0, nombre: 1, precio: 1, codigo: 1}).toArray()
    console.log(productos)

}
catch(error) {
    console.log(`Error realizando las operaciones en la base de datos: ${error.message}`)
}
finally {
    console.log('---- Cerrando conexion a la base de datos ----')
    client.close()
}
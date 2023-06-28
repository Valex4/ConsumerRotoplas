import amqp from "amqplib";
import { createPackage } from "./package.api.js";


const rabbitSettings = {
    protocol: "amqp",
    hostname: "34.235.104.181",
    port: 5672,
    username: "guest",
    password: "guest",
  };
async function connect() {
    const queue = "InitialEvent"
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa')
        const channel = await conn.createChannel()
        console.log ("Canal creado exitosamente en consumidor")

        channel.consume(queue, (msn)=> {
          const contenido =  msn.content.toString();
          const objetoRecibido = JSON.parse(contenido);
            console.log(objetoRecibido)
            //console.log(msn.content.toString());
            const response = createPackage(objetoRecibido);
            console.log("Imprimiendo response: ");
            console.log(response);
            channel.ack(msn)
        })
        

    } catch (error) {
        console.error('Error => ', error)    
    }
}

connect();
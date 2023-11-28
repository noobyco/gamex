import mqtt from 'mqtt'
import 'dotenv/config'


const initiateIgnition = async (roomName, playerId, mode) => {

    const options = {
        host: process.env.MQTT_BROKER,
        port: 8883,
        protocol: 'mqtts',
        username: process.env.BROKER_USERNAME,
        password: process.env.BROKER_PASSWORD
    }

    const client = await mqtt.connect(options)
    await client.publish(`${playerId}/room`, roomName)
    await client.publish(`${playerId}/mode`, mode)
    console.log(roomName, playerId, mode)
}

export {initiateIgnition}
import mqtt from 'mqtt'
import 'dotenv/config'

var options = {
    host: process.env.MQTT_BROKER,
    port: 8883,
    protocol: 'mqtts',
    username: process.env.BROKER_USERNAME,
    password: process.env.BROKER_PASSWORD
}

const initiateIgnition = (roomName, playerId, mode) => {
    const client = mqtt.connect(options)
    client.publish(`${roomName}/room`, roomName)
    client.publish(`${playerId}/mode`, mode)
    
}

export {initiateIgnition}
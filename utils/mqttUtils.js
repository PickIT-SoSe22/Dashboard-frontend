import mqtt from "mqtt";

export function mqttConnect(server) {

    const options = {
        keepalive: 60,
        clientId: 'pick-it-dashboard',
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
            topic: 'WillMsg',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
        }
    }
    const uri = server;
    return mqtt.connect(uri, options);
};

export function mqttPublish(clientRef, topic, msg) {
    if (clientRef) {
        return clientRef.publish(topic, msg);
    }
};

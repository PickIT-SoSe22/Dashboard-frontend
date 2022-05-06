import { Client } from 'mqtt';
import { useState, useEffect } from 'react';
import { mqttConnect, mqttPublish } from "../utils/mqttUtils";

export default function useMqtt() {
  const [client, setClient] = useState(null)

  useEffect(() => {
    if (client) {
      client.on('error', (err) => {
        console.log('Connection error: ', err)
        client.end()
      })
    }
  }, [client])

  function connect(server: string) {
    const connection = mqttConnect(server)
    setClient(connection)
    return connection
  }

  function publish(client: Client, topic: string, msg: string) {
    mqttPublish(client, topic, msg)
  }

  return {
    client,
    setClient,
    mqttConnect: connect,
    mqttPublish: publish
  }
}

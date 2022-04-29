import { useState, useEffect } from 'react';
import { mqttConnect, mqttPublish } from "../utils/mqttUtils";

export default function useMqtt() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (client) {
      client.on('error', (err) => {
        console.log('Connection error: ', err)
        client.end()
      })
    }
  }, [client]);

  function connect () {
      const connection = mqttConnect();
      setClient(connection);
  }

  function publish (topic, msg) {
      mqttPublish(client, topic, msg);
  }

  return {
      client,
      setClient,
      mqttConnect: connect,
      mqttPublish: publish
  }
}

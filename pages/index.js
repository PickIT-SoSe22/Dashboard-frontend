import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import LightDevice from "../components/LightDevice";
import mqtt from "mqtt";

export default function Home() {
  const [client, setClient] = useState(null);

  const mqttConnect = async () => {
    const host = "ws://mqtt.castrumnubis.com:8083/mqtt";
    const options = {
      keepalive: 60,
      clientId: "pick-it-dashboard",
      protocolId: "MQTT",
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: "WillMsg",
        payload: "Connection Closed abnormally..!",
        qos: 0,
        retain: false,
      },
    };
    setClient(await mqtt.connect(host, options));
  };

  const mqttPublish = async (topic, message) => {
    console.log("pub", client);
    if (client) {
      await client.publish(topic, message);
    }
  };

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("error", (err) => {
        console.log("Connection error: ", err);
        client.end();
      });
    }
  }, [client]);

  return (
    <div>
      <h1>ESP-32 Dashboard</h1>
      <LightDevice />
      <Button onClick={() => mqttConnect()}>Connect</Button>
      <Button onClick={() => mqttPublish("test/2", "hello pickit!")}>
        Test
      </Button>
    </div>
  );
}

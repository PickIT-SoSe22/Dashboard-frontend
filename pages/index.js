import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import LightDevice from "../components/LightDevice";
import mqtt from "mqtt";

export default function Home() {
  const [client, setClient] = useState(null);

  const mqttConnect = () => {
    setClient(mqtt.connect('ws://test.mosquitto.org:8080'));
  };

  useEffect(() => {
    if (client) {
      console.log(client)
    }
  }, [client]);

  return (
    <div>
      <h1>ESP-32 Dashboard</h1>
      <LightDevice />
      <Button onClick={() => mqttConnect()}>Connect</Button>
      <Button onClick={() => client.publish("111", "hello world!")}>Test</Button>

    </div >
  )
}

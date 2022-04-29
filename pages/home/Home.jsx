import { Button } from "@mui/material";
import useMqtt from '../../hooks/useMqtt';
import LightDevice from '../../components/LightDevice';

export default function Home() {
  const {mqttConnect, mqttPublish} = useMqtt();

  return (
    <div>
      <h1>ESP-32 Dashboard</h1>
      <LightDevice />
      <Button onClick={() => mqttConnect()}>Connect</Button>
      <Button onClick={() => mqttPublish("111", "hello world!")}>Test</Button>
    </div>
  )
}

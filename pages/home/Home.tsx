import useMqtt from '../../hooks/useMqtt';
import LightDevice from '../../components/LightDevice';
import { useContext, useEffect, useState } from "react";
import { MqttContext } from '../../context/MqttContext';

export default function Home() {
  const { mqttConnect } = useMqtt();
  // const [client, setClient] = useState(null)

  // useEffect(() => {
  //   setClient(mqttConnect())
  // }, [])

  return (
    <div>
      <h1>ESP-32 Dashboard</h1>
      <LightDevice />
    </div>
  )
}

import useMqtt from '../../hooks/useMqtt';
import LightDevice from '../../components/LightDevice';

export default function Home() {

  return (
    <div>
      <h1>ESP-32 Dashboard</h1>
      <LightDevice />
    </div>
  )
}

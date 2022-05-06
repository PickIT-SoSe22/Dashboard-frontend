import React, { useContext, useEffect, useState } from 'react'
import Switch from '@mui/material/Switch';
import { RiLightbulbLine, RiLightbulbFlashLine } from 'react-icons/ri';
import DeviceSettings from './DeviceSettings';
import useMqtt from '../hooks/useMqtt';
import ColorPicker from './ColorPicker';
import { MqttContext } from '../context/MqttContext';

export default function LightDevice() {
    const [lightOn, setLightOn] = useState(false)
    const { topic } = useContext(MqttContext)
    const { mqttPublish } = useMqtt();
    const { client } = useContext(MqttContext)

    useEffect(() => {
        if (client) {
            client.subscribe(topic)
            client.on('message', function (topic, message, packet) {
                console.log(message.toString());
                // setLightOn(!lightOn)
            });
        }
    }, [])

    const turnOn = () => {
        setLightOn(!lightOn)
        let onoff
        lightOn ? onoff = 'off' : onoff = 'on'
        const obj = { power: onoff }
        mqttPublish(client, topic, JSON.stringify(obj))
    };

    return (
        <>
            <div className="device">
                <div className="top">
                    <p className='device-name'>LED-Ring</p>
                    <DeviceSettings />
                </div>
                <div className="mid">
                    <Switch checked={lightOn} onClick={() => turnOn()} value='' />
                    <ColorPicker client={client} />
                </div>
                <div className="icon">
                    {lightOn ?
                        <RiLightbulbFlashLine size="3em" color='#ffff80' />
                        :
                        <RiLightbulbLine size="3em" />
                    }
                </div>
            </div>

            <style jsx>{`
                .mid {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .device {
                    height: 200px;
                    width: 200px;
                    border-radius: 15px;
                    background: linear-gradient(135deg,#ffff80a8 0%,#ff80c0a2 100%);
                    border: 1px solid #30313f;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }
                
                .device-name {
                    text-transform: uppercase;
                    font-weight: 700;
                    margin: 0;
                }

                .icon {
                    margin-top: auto;
                }

                .top {
                    display: flex;
                    justify-content: space-between;
                }
                `}
            </style>
        </>
    )
}
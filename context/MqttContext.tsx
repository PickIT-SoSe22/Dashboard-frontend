import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useMqtt from '../hooks/useMqtt';

export const MqttContext = createContext(null)


export function MqttProvider({ children }) {
    const { mqttConnect } = useMqtt()
    const [server, setServer] = useLocalStorage('server', 'wss://mqtt.castrumnubis.com:8084/mqtt')
    const [client, setClient] = useState(() => mqttConnect('wss://mqtt.castrumnubis.com:8084/mqtt'))
    const [topic, setTopic] = useLocalStorage('topic', 'esp32/ledring/power');
    return (
        <MqttContext.Provider value={{
            server: [server, setServer],
            topic: topic,
            setTopic: setTopic,
            client: client
        }}>
            {children}
        </MqttContext.Provider>
    )
}
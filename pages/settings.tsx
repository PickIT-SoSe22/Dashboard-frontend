import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { MqttContext } from '../context/MqttContext'

export default function Settings() {
    const { server } = useContext(MqttContext)
    const [mqttServer, setMqttServer] = server
    return (
        <div>
            <h1>Einstellungen</h1>
            <div className="settings">
                <div>
                    <TextField label="MQTT Server" variant="standard" InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                        value={mqttServer}
                        onChange={(e) => setMqttServer(e.target.value)}
                    />
                </div>
            </div>
            <style jsx>{`
                .settings {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                }
                `}</style>
        </div>
    )
}

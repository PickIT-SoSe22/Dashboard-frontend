import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Settings() {
    return (
        <div>
            <h1>Einstellungen</h1>
            <div className="settings">
                <div>
                    <TextField label="MQTT Server" variant="standard" InputLabelProps={{
                        style: { color: '#fff' },
                    }} />
                </div>
                <div>
                    <TextField label="MQTT Port" variant="standard" InputLabelProps={{
                        style: { color: '#fff' },
                    }} />
                </div>
                <div>
                    <Button>Speichern</Button>
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

import React from 'react'
import Switch from '@mui/material/Switch';

export default function LightDevice() {
    return (
        <>
            <div className="device">
                <p className='device-name'>
                    LED-Ring
                </p>
                <Switch />
            </div>
            <style jsx>{`
                .device {
                    height: 200px;
                    width: 200px;
                    border-radius: 15px;
                    background-color: #21222c80;
                    border: 1px solid #30313f;
                    padding: 20px;
                }

                .device-name {
                    text-transform: uppercase;
                    margin: 0;
                }
                `}
            </style>
        </>
    )
}

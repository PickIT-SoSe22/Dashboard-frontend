import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import { RiLightbulbLine, RiLightbulbFlashLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import DeviceSettings from './DeviceSettings';

export default function LightDevice({ client }) {
    const [lightOn, setLightOn] = useState(false)
    const [showSettings, setshowSettings] = useState(false)
    return (
        <>
            <div className="device">
                <div className="top">
                    <p className='device-name'>
                        LED-Ring
                    </p>
                    <AiOutlineSetting onClick={() => setshowSettings(true)} />
                    {showSettings && <DeviceSettings setshowSettings={setshowSettings} />}
                </div>
                <Switch onClick={() => setLightOn(!lightOn)} />
                <div className="icon">
                    {lightOn ?
                        <RiLightbulbFlashLine size="3em" color='#ffff80' />
                        :
                        <RiLightbulbLine size="3em" />
                    }
                </div>
            </div>
            {/* linear-gradient(135deg,#ffff80 0%,#ff80bf 100%) */}
            <style jsx>{`
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

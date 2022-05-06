import { Button, TextField } from '@mui/material'
import { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { MqttContext } from '../context/MqttContext';
import useLocalStorage from '../hooks/useLocalStorage';

export default function DeviceSettings() {
    const [showSettings, setshowSettings] = useState(false)
    const { topic, setTopic } = useContext(MqttContext)

    return (
        <>
            <div className='setting-icon'>
                <AiOutlineSetting onClick={() => setshowSettings(true)} />
            </div>
            {showSettings &&
                <div className="settings">
                    <div className="box">
                        <p>
                            LED-Ring Einstellungen
                        </p>
                        <TextField label="Power Topic" variant="standard" InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                        <TextField label="Color Topic" variant="standard" InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />

                        <div className="icon">
                            <AiOutlineCloseCircle size='1em' color='#8aff80' onClick={() => setshowSettings(false)} />
                        </div>
                    </div>
                </div>}
            <style jsx>{`
                .settings {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #3437464a;
                    backdrop-filter: blur(6px);
                    z-index: 1;
                }

                .setting-icon {
                    cursor: pointer;
                }

                .box {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    gap: 10px;
                    background-color: #4e526949;
                    padding: 20px;
                
                    border-radius: 10px;
                }

                .icon {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    cursor: pointer;
                }

                p {
                    margin: 0;
                    text-transform: uppercase;
                    font-weight: bold;
                }
                `}</style>
        </>
    )
}

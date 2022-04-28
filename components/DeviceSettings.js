import { TextField } from '@mui/material'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function DeviceSettings({ setshowSettings }) {
    return (
        <>
            <div className="settings">

                <div className="box">
                    LED-Ring Einstellungen
                    <TextField label="MQTT Topic" variant="standard" />
                    <div className="icon">
                        <AiOutlineCloseCircle onClick={() => setshowSettings(false)} />
                    </div>
                </div>
            </div>
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

                .box {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    gap: 10px;
                }

                .icon {
                    position: absolute;
                    top: -10px;
                    right: -10px;
                }
                `}</style>
        </>
    )
}

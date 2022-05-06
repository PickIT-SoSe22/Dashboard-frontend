import React, { useEffect, useState } from 'react'
import { IoColorPaletteSharp } from 'react-icons/io5';
import { RgbaColorPicker } from "react-colorful";
import { Button, IconButton } from '@mui/material';
import useMqtt from '../hooks/useMqtt';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ColorPicker({ client }) {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useLocalStorage('color', { r: 200, g: 150, b: 35, a: 0.5 });
    const { mqttPublish } = useMqtt();

    const sendIt = () => {
        const farben = {
            rot: color.r,
            gruen: color.g,
            blau: color.b,
            helligkeit: 100
        }
        mqttPublish(client, 'esp32/ledring/color', JSON.stringify(farben))
    }
    return (
        <div>
            <IconButton color='secondary' size='small' onClick={() => setOpen(!open)}>
                <IoColorPaletteSharp size='1.5em' />
            </IconButton>
            {open &&
                <div className="picker">
                    <div className="box">
                        <RgbaColorPicker color={color} onChange={setColor} />
                        <div className="btns">
                            <Button variant='contained' onClick={sendIt}>send it</Button>
                            <Button variant='outlined' onClick={() => setOpen(!open)}>close</Button>
                        </div>
                    </div>
                </div>
            }

            <style jsx>{`
            .picker {
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
                .btns {
                    display: flex;
                    justify-content: space-between;
                }
                `}
            </style>
        </div>
    )
}

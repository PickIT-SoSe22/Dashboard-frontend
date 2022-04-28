import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Tooltip from './Tooltip';

export default function Icon({ icon, href, tooltip }) {
    const Icon = icon
    const router = useRouter()

    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <>
            <div className={router.pathname === href ? 'act' : 'notAct'}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>

                <Link href={href}>
                    <Icon size='2em' color={router.pathname === href ? '#ffffff' : '#6272A4'} />
                </Link>

                {showTooltip &&
                    <Tooltip>
                        {tooltip}
                    </Tooltip>
                }
            </div>

            <style jsx>{`
                .act {
                    position: relative;
                    background-color: #3c3d51;
                    width: 100%;
                    height: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-left: 1px solid #8aff80;
                    cursor: pointer;
                }

                .notAct {
                    width: 100%;
                    height: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .notAct:hover{
                    background-color: #ffffff19;
                    transition: all 0.5s;
                }

            `}</style>
        </>
    )
}

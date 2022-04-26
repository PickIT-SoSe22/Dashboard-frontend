import React from 'react'
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';

export default function Sidebar({ sidebarWidth }) {
    const router = useRouter()
    return (
        <div>
            <div className="sidebar">
                <nav className="icons">
                    <div className={router.pathname === '/' ? 'act' : 'notAct'}>
                        <a href="/">
                            <AiOutlineHome size='2em' color={router.pathname === '/' ? '#ffffff' : '#6272A4'} />
                        </a>
                    </div>
                    <div className={router.pathname === '/settings' ? 'act' : 'notAct'}>
                        <a href="/settings">
                            <AiOutlineSetting size='2em' color={router.pathname === '/settings' ? '#ffffff' : '#6272A4'} />
                        </a>
                    </div>
                </nav>
            </div>
            <style jsx>{`
                .sidebar {
                    width: ${`${sidebarWidth}px`};;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    background-color: #343746;
                }

                .act {
                    background-color: #3c3d51;
                    width: 100%;
                    height: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-left: 1px solid #ff79c6;
                }

                .notAct {
                    width: 100%;
                    height: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .icons {
                    margin: 20px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    color: #ffffff;
                }
                `}</style>
        </div>
    )
}

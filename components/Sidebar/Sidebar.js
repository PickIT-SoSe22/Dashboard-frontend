import React from 'react'
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import Icon from './Icon';

export default function Sidebar({ sidebarWidth }) {
    return (
        <div>
            <div className="sidebar">
                <nav className="icons">
                    <Icon icon={AiOutlineHome} href="/" tooltip="Home" />
                    <Icon icon={AiOutlineSetting} href="/settings" tooltip="Einstellungen" />
                </nav>
            </div>
            <style jsx>{`
                .sidebar {
                    position: relative;
                    width: ${`${sidebarWidth}px`};;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    background-color: #343746;
                    cursor: pointer;
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

import React from 'react'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ children }) {
    const sidebarWidth = 72
    return (
        <>
            <div>
                <Sidebar sidebarWidth={sidebarWidth} />
                <div className="child-style">
                    {children}
                </div>
            </div>
            <style global jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
                
                body {
                    background-color: #282a36;
                    font-family: 'IBM Plex Sans', sans-serif;
                    color: #ffffff;
                }

                .child-style {
                    margin-left: ${`${sidebarWidth + 20}px`};
                }
                `}
            </style>
        </>
    )
}

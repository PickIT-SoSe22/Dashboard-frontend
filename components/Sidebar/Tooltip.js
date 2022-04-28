import React from 'react'

export default function Tooltip({ children }) {
    return (
        <>
            <div className='helper'>
                {children}
            </div>

            <style jsx>{`
                .helper {
                    position: absolute;
                    left: 100%;
                    margin-left:15px;
                    background-color: #282a36;
                    padding: 8px;
                    border: 1px solid #343746;
                    border-radius: 5px;
                }
                `}
            </style>
        </>
    )
}

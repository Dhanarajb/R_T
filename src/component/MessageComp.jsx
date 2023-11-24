import React from 'react'

const MessageComp = ({ isSuccess }) => {
    return (
        <div>
            {
                isSuccess ?
                    <p style={{ color: "green" }}>Success your life</p>
                    :
                    <p style={{ color: "red" }}>Waiting!!!</p>
            }
        </div>
    )
}

export default MessageComp
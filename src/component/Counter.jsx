import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default Counter
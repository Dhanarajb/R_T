import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <button onClick={handleToggle} className={toggle ? "on" : "off"}>{toggle ? 'on' : 'off'}</button>
        </div>
    );
};

export default Toggle;

import React, {useState} from 'react';


export const UseState = () => {
    const[counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
};


import React, {useMemo, useState} from 'react';

const generateData = () => {
    return 124235345;
}

export const UseState = () => {
    const initValue = useMemo(generateData, [])
    const[counter, setCounter] = useState(initValue)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
};


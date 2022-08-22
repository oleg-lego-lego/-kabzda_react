import React, {useState} from 'react';

const generateData = () => {
    return 124235345;
}

export const UseState = () => {
    //const initValue = useMemo(generateData, [])
    const[counter, setCounter] = useState(generateData)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    );
};


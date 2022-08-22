import React, {useState} from 'react';

const generateData = () => {
    return 124235345;
}

export const UseState = () => {
    //const initValue = useMemo(generateData, [])
    const[counter, setCounter] = useState(generateData)
    const changer = (state: number) =>  state + 1

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};


import React, {useEffect, useState} from 'react';

export const UseEffect = () => {
    const[fake, setFake] = useState(1)
    const[counter, setCounter] = useState(1)
    const changer = (state: number) =>  state + 1

    useEffect(() => {
        document.title = counter.toString()
    },[counter])

    return (
        <div>
            hello, {counter} {fake}
            <button onClick={() => setFake(changer)}>+</button>
        </div>
    );
};

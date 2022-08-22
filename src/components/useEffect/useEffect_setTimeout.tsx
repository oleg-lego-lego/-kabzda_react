import React, {useEffect, useState} from 'react';

export const SetTimeOut = () => {
    const[fake, setFake] = useState(1)
    const[counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() =>{
            document.title = counter.toString()
        }, 1000)
    },[])

    return (
        <div>
            hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

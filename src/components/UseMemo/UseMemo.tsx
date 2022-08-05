import React, {useMemo, useState} from 'react';

export const DifficultUseMemo = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000) {
                fake++
                const faceValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr />
            <div>
                Result for a: {resultA}
                Result for b: {resultB}
            </div>
        </div>
    );
}

export const HelpUseMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(['oleg', 'valera', 'artem'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            {newArray}
        </>
    )
}
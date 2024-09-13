import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [IncrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <div>Count value is: {count}</div>
            <button onClick={() => {
                setCount(count + IncrementBy)
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - IncrementBy)
            }}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => {
                setIncrementBy(IncrementBy + 1)
            }}>Increment Count By {IncrementBy}</button>

        </>
    )

}
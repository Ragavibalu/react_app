import React, { useState, useCallback } from "react";

const Callback = () => {
    const [count, setCount] = useState(0);

    // const handlingCallbackFunc = useCallback(() => {
    //     console.log(`button clicked if clicked print the count else don't print the count Count: ${count}`);
    // }, [count]);

    return (
        <div>
           <h1>This is callback example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>ADD one</button><br/><br/>
           {/* {<button onClick={handlingCallbackFunc}>Callback count</button>} */}
            <ol>
            {list.map((val,index)=>
                <li key={index}>{val}</li>)}
            </ol>

        </div>
    );
}

export default Callback;
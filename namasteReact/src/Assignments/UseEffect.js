import { useEffect } from 'react';

const UseEffect1 = () => {
    useEffect(() => {
        console.log("Use effect inside - as side effect");
    })

    console.log("Use Effect main effect");
    return(
        <>
            <h1>Use Effect  working</h1>
        </>
    )
}

export default UseEffect1;
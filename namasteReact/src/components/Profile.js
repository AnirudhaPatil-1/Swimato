import {useState, useEffect} from 'react';

const Profile = (props) => {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Functional component timer")
    //     }, 1100);

    //     return () => {
    //         clearInterval(timer);
    //         console.log("useEffect Return")
    //     };
    // }, [])

    return(
        <div className = "profile">
            <h1>ProfileFunctionalComponent</h1>
            <h3>Props Value: {props.key1} </h3>
            <h3>{count}</h3>
            <button onClick={()=> {
                setCount(1);
            }}>
                click me
            </button>
        </div>
    )
}

export default Profile;
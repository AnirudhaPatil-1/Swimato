import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = ()=> (
        <a>
            <img
            className='logo'
            alt='logo'
            src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"
            // src="https://drive.google.com/file/d/1HEA5_KKZTB1OMXKVhUEodoPiTfltayet/view?usp=sharing" 
            />
        </a>
)

//composing components
const HeaderComponent = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <h4>Body</h4>
    )
}

const styleObj = {
    backgroundColor: "red"
}

const Footer = () => {
    // 1.
    // return(
    //     <div style={styleObj} >
    //         <h4>Footer</h4>
    //     </div>
    // )
    // 2.
    return(
        <div style= {{
            backgroundColor: "red"
        }} >
            <h4>Footer</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderComponent/>   
            <Body/>
            <Footer/>
        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
// root.render(<HeaderComponent/>);
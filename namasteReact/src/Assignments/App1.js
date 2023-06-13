import React from "react";
import ReactDOM from "react-dom";
import {UseEffect1} from "../Assingments/UseEffect";

import * as MainHeader from "./components/Header"; /* Imported using import * as namespace  */ 
import Body from "./components/Body"; /* Imported using default export */
import { Footer as MainFooter } from "./components/Footer"; /* Imported using Named Import Map */


const assignment = () => {
    return (
        <h1 className="assignment-heading"></h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<assignment/>);
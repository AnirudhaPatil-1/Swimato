/*
*Created a server
*HMR - hot module replacement
*file watcher algorithm - c++
*bundling
*minify
*cleaning our code
*dev and production builds
*super fast build algorithm
*image  optimization 
*caching while development
*compression
*compatible with older version of Browser
*HTTPS on dev
*port number
*consistent hashing algorithm
*zero config
*tree shaking
*
*/

import { config } from "process"
import React from "react";
import ReactDOM from "react-dom/client";
import { Browser } from "selenium-webdriver"
import { buildPath } from "selenium-webdriver/http"
import { CommandExecutor, Server } from "selenium-webdriver/safari";

const heading1 = React.createElement("h1", {
    id: "heading1"
}, "HEADING 1");
const heading2 = React.createElement("h2", {
    id: "heading2"
}, "HEADING 2");
const container = React.createElement("div", {
    id: "container" 
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Nested React Elements inside container div and rendering in root */
const heading1 = React.createElement("h1", {key: "1", id: "title"}, "Namaste React using React");
// const heading2 = React.createElement("h2", {key: "2", id: "sub_title"}, "Nested React Elements");
// const container = React.createElement("div", {id: "content"}, [heading1, heading2]);

// const title = (
//     <h1 id="title" key="h2">
//         Namaste React
//     </h1>
// );

// //Composing components
// const HeaderComponent = () => {
//     return (
//         <div>
//             {title}
//             <h2>Subheading for Namaste React</h2>
//             {/* <h2>this is one more h2 heading</h2> */}
//         </div>
//     )
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
// root.render(<HeaderComponent/>);
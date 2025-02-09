import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1 id="heading">Namaste from JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


// -----------------------------------------------------------

// const HeadingComponent = () => (
//     <div>
//         <h1 id="heading">Namaste from Functional Component</h1>
//     </div>
// ) 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)

// -------------------------------------------------------------

const Title = () => {
    return <h1>Title Component</h1>
}

const HeadingComponent = () => (
    <div>
        <Title/>
        <h1 id="heading">Namaste from Functional Component</h1>
    </div>
) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
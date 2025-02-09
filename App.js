import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello From React!");

const parent = React.createElement("div", 
    {id: "parent"},
    React.createElement("div",
        {id: "child"},
        [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
import React from 'react';
import ReactDOM from 'react-dom/client'

/**
 * <div id='grandparent'>
 *  <div id='parent'>
 *   <div id='child'>
 *    <h1>I am h1 tag</h1>
 *   <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 * </div> 
 *
 */

// React.createElement(type, props, children) -> React element (JS Object) -> HTML (DOM element, renders on the screen)
const grandparent = React.createElement("div",{
    id:'grandparent'
}, React.createElement("div",{
    id:'parent'
}, React.createElement("div",{
    id:'child'
}, 
[React.createElement("h1",{ key: "h1" },"I am h1 tag"),
React.createElement("h2",{ key: "h2" },"I am h2 tag")
]
)))

//JSX ->HTML like syntax which is not HTML

//JSX -> React.createElement() -> React element (JS Object) -> HTML (DOM element, renders on the screen)
const jsxHeading = <h1>Hello, React using JSX!</h1>;

const heading = React.createElement('h1', null, 'Hello, React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
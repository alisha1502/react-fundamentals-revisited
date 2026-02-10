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
// const grandparent = React.createElement("div",{
//     id:'grandparent'
// }, React.createElement("div",{
//     id:'parent'
// }, React.createElement("div",{
//     id:'child'
// }, 
// [React.createElement("h1",{ key: "h1" },"I am h1 tag"),
// React.createElement("h2",{ key: "h2" },"I am h2 tag")
// ]
// )))

//JSX ->HTML like syntax which is not HTML

//JSX -> React.createElement() -> React element (JS Object) -> HTML (DOM element, renders on the screen)
const jsxHeading = <h1>Hello, React using JSX!</h1>;

const heading = React.createElement('h1', null, 'Hello, React!');

//React Component
const Title = () => (
    <h1>This is a Title Component</h1>
);

//React functional component - It should be Written as Title (PascalCase)
const title = () => {
    return(
        <div className='title-container'>
            <h1>This is a Title Component using JSX</h1>
        </div>
    )
}

//React element
const titleElement = (
    <div className='title-element-container'>
        <h1>This is a Title Element using JSX</h1>
    </div>
);


//Component Composition (a component can be used inside another component)
// const HeadingComponent = () => {
//     return (
//         <div className='container'>
//             <Title />
//             <h1>Hello, I am a React Component!</h1>
//         </div>
//     );
// }

const HeadingComponent = () => {
    return (
        <div className='container'>
            {titleElement}
            <h1>Hello, I am a React Component!</h1>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
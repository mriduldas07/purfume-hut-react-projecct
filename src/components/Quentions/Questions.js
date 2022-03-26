import React from 'react';
import './Quentions.css'

const Questions = () => {
    return (
        <div className='quentions'>
            <h2>Qsn: How does react works?</h2>
            <h3>Answer:</h3>
            <p>Well, firstly react is not a framework,it's a popular javascript library.It's used for building user Interfaces.Basicly,DOM is very slow to use.Besides,React is a declarative, efficient, and flexible JavaScript library for building user interfaces.React works in declarative code.It contains a collection of reusable js code snippets used for UI building called components.Users can create a representation of a DOM node by declaring the Element of function in React.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets.In an SPA, the browser initially loads one HTML document. As users navigate through the site, they actually stay on the same page.JS destroys and creates a new user interface as the user interacts with the application.</p>
            <br />
            <br />
            <h2>Qsn: Difference between props vs state?</h2>
            <h3>Answer</h3>
            <p>Props are read only and props can't be modified.Besides, state changes can be asynchronous and state can be modified using this.setState .
            Props are immutable.We can pass properties from parent to child components.On the other hand, state are mutable.We can define states in the component itself.
            The state is set and updated by the object.
            React components are like functions that take parameters called props.Passes by a parent component as a single object.We display props, but don't modify them.
            Otherhand, scope limited to one component but can be passed to children as props.When we call setState then render are called.
            </p>
        </div>
    );
};

export default Questions;
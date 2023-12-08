export const React = () => {

    return (
    <div>


  <h1>React</h1>
  <ol>
    <li>
      <h3>What is React.js?</h3>
      <ul>
        <li>React.js is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface when the underlying data changes.</li>
      </ul>
    </li>
    <li>
      <h3>What is JSX in React?</h3>
      <ul>
        <li>JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe the structure and appearance of UI components.</li>
      </ul>
    </li>
    <li>
      <h3>What is the difference between a class component and a functional component in React?</h3>
      <ul>
        <li>Class components are defined as ES6 classes and have a state and lifecycle methods. Functional components are written as regular JavaScript functions and are stateless until the introduction of React Hooks.</li>
      </ul>
    </li>
    <li>
      <h3>What are React Hooks?</h3>
      <ul>
        <li>React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 as a way to use state and lifecycle methods without writing a class component.</li>
      </ul>
    </li>
    <li>
      <h3>Explain the concept of virtual DOM in React.</h3>
      <ul>
        <li>The virtual DOM is a lightweight copy of the actual DOM that React uses to perform efficient updates. React updates the virtual DOM and then calculates the minimal changes needed to update the real DOM, which improves performance.</li>
      </ul>
    </li>
    <li>
      <h3>What is the significance of keys in React lists?</h3>
      <ul>
        <li>Keys in React lists help identify each list item uniquely. They help React identify which items have changed, been added, or been removed. Using keys properly can improve performance and help maintain component state.</li>
      </ul>
    </li>
    <li>
      <h3>What is the purpose of the setState() method in React?</h3>
      <ul>
        <li>The setState() method is used to update the state of a component in React. When setState() is called, React re-renders the component with the updated state, causing the UI to reflect the new changes.</li>
      </ul>
    </li>
    <li>
      <h3>What are controlled and uncontrolled components in React?</h3>
      <ul>
        <li>Controlled components are React components that manage their own state. Their value is controlled by React, and any changes to the state are handled through event handlers. Uncontrolled components, on the other hand, manage their state internally using the DOM.</li>
      </ul>
    </li>
    <li>
      <h3>What are React lifecycle methods?</h3>
      <ul>
        <li>React lifecycle methods are special methods that are called at different stages of a components life cycle, such as when it is being created, updated, or destroyed. Examples include componentDidMount() and componentWillUnmount().</li>
      </ul>
    </li>
    <li>
      <h3>What is the purpose of the useEffect() hook in React?</h3>
      <ul>
        <li>The useEffect() hook in React allows you to perform side effects in functional components. It is commonly used for data fetching, subscribing to events, or setting up timers. It replaces lifecycle methods like componentDidMount() and componentDidUpdate().</li>
      </ul>
    </li>
  </ol>
            </div>
    )
}


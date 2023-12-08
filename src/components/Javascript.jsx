export const Javascript = () => {

    return (
    <div>
<h1>JavaScript</h1>

<ol>
  <li>
    <strong>What is JavaScript?</strong>
    <p>JavaScript is a high-level, interpreted programming language used to make web pages interactive.</p>
  </li>
  <li>
    <strong>What are the data types in JavaScript?</strong>
    <p>JavaScript has six primitive data types: string, number, boolean, null, undefined, and symbol (added in ECMAScript 6). It also has one complex data type: object.</p>
  </li>
  <li>
    <strong>What is hoisting in JavaScript?</strong>
    <p>Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.</p>
  </li>
  <li>
    <strong>Explain the difference between let, const, and var.</strong>
    <p>let and const are block-scoped variables introduced in ECMAScript 6, while var is function-scoped. let allows reassignment, while const is a constant (immutable) value.</p>
  </li>
  <li>
    <strong>How does prototypal inheritance work in JavaScript?</strong>
    <p>Prototypal inheritance is a way of creating objects in JavaScript where objects can inherit properties and methods from other objects. It involves using prototype chains to look up properties and methods in an objects prototype chain.</p>
  </li>
  <li>
    <strong>What is the difference between == and === in JavaScript?</strong>
    <p>== performs type coercion, meaning it converts the operands to a common type before comparison. === strictly compares the operands without performing any type coercion.</p>
  </li>
  <li>
    <strong>Explain the concept of closures in JavaScript.</strong>
    <p>A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer scope even after the outer function has finished executing.</p>
  </li>
  <li>
    <strong>How does event delegation work in JavaScript?</strong>
    <p>Event delegation is a technique where you attach a single event listener to a parent element instead of attaching individual event listeners to each child element. This allows you to handle events efficiently, especially for dynamically added elements.</p>
  </li>
  <li>
    <strong>What are arrow functions in JavaScript?</strong>
    <p>Arrow functions are a concise way to write function expressions in JavaScript. They have a shorter syntax compared to regular functions and inherit the this value from the surrounding context.</p>
  </li>
  <li>
    <strong>How do you handle errors in JavaScript?</strong>
    <p>Errors in JavaScript can be handled using try...catch statements. The code that may throw an error is enclosed in a try block, and any potential errors are caught and handled in the catch block.</p>
  </li>
  <li>
    <strong>What is the difference between null and undefined in JavaScript?</strong>
    <p>null is an assignment value that represents the intentional absence of an object value. undefined is a value given to variables that have been declared but have not been assigned a value.</p>
  </li>
  <li>
    <strong>Explain the concept of promises in JavaScript.</strong>
    <p>Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be resolved in the future. Promises can be used to chain asynchronous operations and handle success or error conditions.</p>
  </li>
  <li>
    <strong>How can you make an AJAX request in JavaScript?</strong>
    <p>You can make an AJAX request in JavaScript using the XMLHttpRequest object or the newer fetch() API. These allow you to send HTTP requests to a server and handle the response asynchronously.</p>
  </li>
  <li>
    <strong>What is the purpose of the this keyword in JavaScript?</strong>
    <p>The this keyword refers to the object that the function is executing in. Its value is determined by how a function is called and can vary depending on the context.</p>
  </li>
  <li>
    <strong>How do you work with JSON data in JavaScript?</strong>
    <p>JavaScript provides methods like JSON.parse() to convert a JSON string into a JavaScript object, and JSON.stringify() to convert a JavaScript object into a JSON string.</p>
  </li>

  <li>
  <strong>What are the different ways to declare a variable in JavaScript?</strong>
  <p>Variables can be declared using the var, let, or const keywords. var has function scope, while let and const have block scope.</p>
  </li>
  <li>
  <strong>Explain the concept of event bubbling and event capturing.</strong>
  <p>Event bubbling is a mechanism where an event triggered on a nested element will bubble up and trigger the same event on its parent elements. Event capturing is the opposite, where the event is triggered on the parent elements first and then propagates down to the nested elements.</p>
  </li>

</ol>
            </div>
    )
}


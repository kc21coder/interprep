export const DesignPatterns = () => {

    return (
    <div>

 <h1>Design Patterns</h1>
    <ol>
      <li>
        <p className="question">What are design patterns, and why are they important in software development?</p>
        <p>Answer: Design patterns are reusable solutions to common software design problems. They capture best practices and provide proven approaches to solving specific design challenges. Design patterns are important in software development because they promote code reusability, maintainability, and extensibility. They provide a common language and vocabulary for developers to communicate and understand software architectures. By following design patterns, developers can build robust, scalable, and well-structured applications.</p>
      </li>
      <li>
        <p className="question">Can you explain the Singleton design pattern and when it is appropriate to use?</p>
        <p>Answer: The Singleton design pattern ensures that a class has only one instance and provides a global point of access to it. It is used when you want to restrict the instantiation of a class to a single object. The Singleton pattern is suitable in scenarios where there should be only one instance of a class, such as a database connection manager or a logging system. It allows global access to that single instance, enabling efficient resource sharing and coordination.</p>
      </li>
      <li>
        <p className="question">What is the Observer design pattern, and when would you use it?</p>
        <p>Answer: The Observer design pattern defines a one-to-many dependency between objects, where multiple observers are notified of any state changes in a subject object. It is used when there is a need for loose coupling between objects, and a change in one object should trigger updates in other dependent objects. The Observer pattern is commonly used in event-driven systems, user interfaces, and publish-subscribe systems, where decoupling the subject from its observers is desired.</p>
      </li>
      <li>
        <p className="question">Can you explain the Factory Method design pattern and its purpose?</p>
        <p>Answer: The Factory Method design pattern provides an interface for creating objects, but allows subclasses to define the type of objects to be instantiated. It encapsulates the object creation logic in a separate method, which is implemented by concrete subclasses. The purpose of the Factory Method pattern is to delegate the responsibility of instantiation to subclasses, allowing for flexible object creation and decoupling the client code from specific implementations. It promotes the open-closed principle by enabling the addition of new product types without modifying existing client code.</p>
      </li>
      <li>
        <p className="question">What is the Model-View-Controller (MVC) design pattern, and why is it widely used in web development?</p>
        <p>Answer: The Model-View-Controller (MVC) design pattern is an architectural pattern that separates the application logic into three interconnected components: the Model, the View, and the Controller. The Model represents the data and business logic, the View handles the presentation and user interface, and the Controller manages the interaction between the Model and the View. The MVC pattern is widely used in web development because it promotes separation of concerns, modular development, and code reusability. It allows for independent development and testing of each component, facilitates the maintenance and evolution of the application, and supports multiple user interfaces and device types.</p>
      </li>
    </ol>

     </div>
    )
}


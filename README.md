### JS Form Builder
I created this project to explain React Rendering in Vanilla Js. In this project I demonstrated how UI is beign updated in React Js. If you’re new to React or want to understand how React work, you’re at right place, continue your reading.
#### What is React Js
React is a popular UI/UX state management library written in Js. Rather manipulating DOM elements; React uses Js objects for rendering the UI components. This Js object is termed as a global state/store in React. To generate the latest UI; the state is modified; as the state is updated, the react library re-rendered the entire UI/UX to reflect the latest UI. In practice this framework is a bit complex to understand. But here I have elaborated how this concept works in plain Js.
#### About the project
This project is about building HTML form by writing 0 HTML. Just input necessary details and hit create. A new field will be add to UI. How does this really work is based on React state and rendering concept. But in Vanilla Js.
#### How does it work
All field related data is available in a global variable or global state. At first, global render method read each field from global state and passed to form builder methods. These methods creates relevant element set it's attributes and append it to document body.
Whenever a new field is created, first add to global state and call global render method. Render method repeat its cycle and render all fields to UI again.
#### Limitations
This project is just the demonstration of React state management and UI rendering. It may come with some limitations. In contrast, React is well matured, maintained and valuable library. Which uses virtual DOM to to reduce no of operations and improve performance. But this project can be contribute in understanding React primary functions.


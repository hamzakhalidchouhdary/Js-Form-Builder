### JS Form Builder
I created this project to explain React Rendering in Vanilla Js. In this project I demonstrated how UI is beign updated in React Js. If you’re new to React or want to understand how React work, you’re at right place, continue your reading.
#### What is React Js
React is a popular UI/UX state management library written in Js. Rather manipulating DOM elements; React uses Js objects for rendering the UI components. This Js object is termed as a global state/store in React. To generate the latest UI; the state is modified; as the state is updated, the react library re-rendered the entire UI/UX to reflect the latest UI. In practice this framework is a bit complex to understand. But here I have elaborated how this concept works in plain Js.
#### About the project
This project is about building HTML form by writing 0 HTML. Just input necessary details and hit create. A new field will be add to UI. How does this really work is based on React state and rendering concept. But in Vanilla Js.
#### How does it build form
All field related data is available in a global variable or global state. Form builder reads each field available in global state and pass it to render method. Rander method creates relevant element set it's attributes and append it to document body.
When ever a new field is created append to global state as global state in modified, state is read and render again to reflect latest updates.

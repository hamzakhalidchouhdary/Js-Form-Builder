### JS Form Builder
In this project I demonstrated how React Js updates UI. I have created this project to explain React Rendering in Vanilla Js. If you’re new to React or want to understand how React work, you’re at right place, continue your reading.
#### What is React Js
React is a popular UI/UX state management framework. It uses JS objects for rendering the UI components. JS object is termed as a global state/store in React. To generate the latest UI; Instead of manipulating the DOM elements, the state is modified. As the state is updated, the react library re-rendered the entire UI/UX to reflect the updated UI. In practice this framework is a bit complex to understand. Here I have elaborated how; this concept works in plain JS.
#### About the project
This project is about building HTML form with writing 0 HTML. In form enter necessary details and hit create. A new filed will be add to UI. How does this really work is based on React state and rendering concept. But in Vanilla Js.
#### How does it build form
All field related data is available in a global variable or global state. Form builder reads each field available in global state and pass it to render method. Rander method creates relevant element set it's attributes and append it to document body.
When ever a new field is created append to global state as global state in modified, state is read and render again to reflect latest updates.

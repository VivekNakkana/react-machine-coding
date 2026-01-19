import Accordion from './Accordion.jsx'

function App() {
  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "Why use React?",
      content: "React allows developers to create reusable UI components and manage state efficiently."
    },
    {
      title: "How does React work?",
      content: "React uses a virtual DOM to optimize rendering and update only the parts of the UI that have changed."
    },
    {
      title: "What are hooks in React?",
      content: "Hooks are functions that let you use state and other React features without writing a class."
    }
  ];

  return (
    <Accordion items={items} />
  )
}

export default App

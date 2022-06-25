# <div style="color:red"> React Notebook </div>

## <div style="color:green">**Section 2: JavaScript Refresher**</div>

### **19. Reference and Primitive Types Refreshser:**

```javascript
const number = 1;
const number2 = number;
console.log(number2);
```
    
- object2 = object1: we just copied the **pointer**, they are point to one place => if you change object1, object2 is change to 
- objects and arrays are reference types, if you reassign them you're copying the pointer not the value

### **20. Refresing array functions:**
(function that execute on each element)

```javascript
const doubleNumArray = numbers.map( (num) => {
    return num * 2
})
```

### **23. JS Array Functions:**
- map()
- find(): find first element in array satisfied our condition
- findIndex(): 
- filter()
- reduce()
- concat(): merge two or more arrays
- slice(): create shallow copy or slice the array
- splice()
(indexOf())


## <div style="color: green">**Section 3: React Basics and Working with components**</div>
### **24. Module introduction:**
- Component-driven user interfaces
- building interatice & Scalable UIs
- React core syntax & JSX
- Working with components
- Working with data

### **25. What are components? And Why is React all about them?**
- React is a JS library for building user interfaces
- HTML, CSS & JS are about building uesr interfaces as well
- React make building complex, interactive and reactive user interfaces simpler
- React is all about "Components"
    + Because all user interfaces in the end are made up of components
    + Reusability
    + Separation of conerns
    + Don't repeat yourself
    + Don't do too many things in one and the same place (function)
    => Split big chunks of code into multiple smaller functions

### **26. React Code is Written in a "declarative way"!** 
- How exactly is a component built?
- In the end user interfaces are about HTML, CSS, JS
- React (HTML + JS, CSS-not focus in React)
- React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS)
-> Declarative Approach
-> Define the desired target state(s) and let React figure out the actual JS DOM instructions
=> Build your own, custom HTML Elements

### **28. Creating a new React Project**
- The easiest way of getting started with a react project is to use a tool called "create react app":
    + give you a nice development env
    + preview your app locally on your machine
    + automatically update the page whenever you make changes in your code
    
- Node.js:
    + is a technology which is not directly related to React
    + allow you to run JS code outside of browser
    + React code is JS code that runs in the browser
    + use node js for development preview server and behind the scenes transformation and optimization steps


### **30. Analyzing a Standard React Project:**
- npm start: start development server
- React transform our code into browser -> some feature that **regular JS** not support will be available in react
- import css to JS: `import ./index.css`
- html in JS: `root.render(<App />)` (write code in the nice way and easy way)
- `index.js` is the first file to execute
    + `import ReatDom`: `react` and `react-dom` two dependencies together from the react library
    + `ReactDOM.createRoot(document.getElementById('root'));`: the main entry point, main hook, main place where the React app gets rendered to
    + public/`index.html`: 
        * the only htm file that is being used by this overall react app
        * the place where the react-driven user interface should be rendered into
    + `import App from './App`: is the components: return a html code inside JS file
    + `root.render(<App/ >)`: tell React what should be rendered in that div , JSX

### **31. Introducing JSX**
- JSX: Stand for JS XML (HTML code inside JS)
- HTML and XML?
- dev tool chrome /static/js: react lib source code + react DOM lib code + react pakage code. 
- main.chunk.js -> contain our App() {} code but transformed.

### **32. How React Works**
- `<p> This is visible </p>`
- imparitive appoach: giving clearing instruction, step-by-step what JS should be doing
- for hundred of elements and complex app, we ussualy need to add and remove elements => cumbersome
```javascript
const para = domcument.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);
```

<div style='color:yellow'>June 18th 2022</div>

### **38. Adding "normal" JS logic to Components**

```javascript
function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-item'> 
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}
```

### **39. Splitting Components into multiple components**
- every component is focused on one core task
- combining component to build app
- small and manageable
- split `ExpenseDate`: `<ExpenseDate date={props.date}></ExpenseDate>`
```js
import './ExpenseDate.css'


function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate
``` 

### **Assignment 1: React & Component Basics**
In detail:

Create a new component that is responsible for displaying expenses

Add multiple ExpenseItem components in that component

Keep the expenses data in the App component and pass that data into the newly created component

`<Expenses expenses={expenses}/>` in `App.js`

```js
import './Expenses.css'
import ExpenseItem from './ExpenseItem'


function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </div>
    )
}

export default Expenses
```

### **40. The Concept of "Composition" ("children props")**
- `Card`: container with rounded corners, drop shadows, and elements
- extract some type to `Card.css` -> no content -> add props.children -> content show but some broken (custom Card component outside of the html element)-> `const classes = 'card' + props.(add whatever is set as a class name on card to this class name string)
- `props.children`: reserved name, the value of this props will always be the content of your custom component

- wrapper component: build a component serves as a shell, configure everything through props, reduce style duplication and html structure duplication
- extract some code duplication
- keep other components clean
- compose our ExpenseItem component by using card as a wrapper, built-in html elements, ExpenseDate
- `Card` did not work as my expected -> `const classes = 'card ' + props.className;` the space after `card`

```js
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card
```

### **41. A First Summary**

- Components + Props 
- Downside: Static app

### **42. A closer look at JSX**
- `package.json` a bunch of dependencies, behind the scenes transformations
- React and ReacDom
- `import React from 'react'`: for all files that use JSX, modern React does not need to import
```js
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This also visible</p>
      <Expenses items={expenses}/>
    </div>
  );
```

```js
return React.createElement(
    'div', 
    {},
    React.createelement('h2', {}, "Les'st get started!"),
    React.createElement(Expenses, { items: expenses })
    )
```
- cant return 2 thing React => root element in JSX
 
### **43. Organizing components files**
- Components/Expense and Components/UI
- `import Expenses from "./components/Expense/Expenses";`
- `import Card from '../UI/Card'`

### **44. An alternative function syntax**
- arrow function

### **45. Module resoures**
1. Which kind of code do you write when using React.js?

-> With React.js, you define the "goal" (i.e. what should be shown on the screen) and let React figure out how to get there.

2. What is "JSX"?

-> React projects like the ones we create via "create-react-app" support JSX syntax. It gets compiled to standard JS code behind the scenes.

3. Why is React all about "Components"?

-> "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives you tools to build components that you can then combine.

4. What does "declarative" mean? 

-> You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

5. What is a "React Component"? 

-> A JS function that typically returns some HTML (or, to be precise: JSX) code which will be shown on the screen when that component is used.

6. How many custom React components must a React app have? 

-> You can have as many React components as you want / need

7. Which statement is correct? 

-> You build a component tree that has one root node.

8. What does "component tree" mean? 

-> You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

9. How do you pass data between components? 

-> You build your own "HTML elements" in the end, hence you can also define your own attributes (called "props" in React's world)

10. How can you output dynamic data in React components (i.e. in the returned JSX code)? 

->  You can't put block statements (e.g. if statements) between those curly braces but you can output any result of any JS expression by using this special feature.



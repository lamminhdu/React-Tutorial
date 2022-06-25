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

**33. Building a first custom component**
- `components` dir: contains our custom component (not a bunch of components inside `App.js`)
- Naming new JS file convention: `ExpenseItem.js`
- A component in React is just a JS function that return JSX code
- We should not import our components in `index.js` file => import it in `App.js`
```javascript
function ExpenseItem() {
    return <h2>Expense item!</h2>
}

export default ExpenseItem;
```
- `<ExpenseItem></ExpenseItem>`: tell React that we want to use this component
- React rule:
    - Lowercase elements are built in HTML elements
    - Custom components must start with an uppercase character

**34. Writting more complex JSX code**
- `ExpensItem`: title + amount of this expense + date
- React rule for html: one root element per return statement
    + Wrap with `<div> <...> </div>`
    + Wrap with `(<...>)`

**35. Adding basic styling**
- `ExpenseItem.css`
- Tell React to use CSS file in `ExpenseItem.js`: `import './ExpenseItem.css'`
- Note: `<div class="">`(use in html) != `<div className="">`(use in react JSX)
- `clas**e**Name` vs `className`
```javascript
import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>June 14th 2022</div>
            {/* <div className='expense-item__description'> */}
            <div claseName='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$267</div>
            </div>
        </div>
    )
}

export default ExpenseItem
```

**36. Outputting Dynamic Data & Working with Expressions in JSX**
- No hard coded in html text
- Reuse `ExpenseItem` component => dynamic variable
- `<h2>{Math.random()}</h2>`: Execute basic JS code in JSX

```javascript
function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67
    
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    )
}
```

**37. Passing data via `props`**
- `components` **cant** just use data stored in other components
- `props` is the concept to share data within components (in here: `App.js` vs `ExpenseItem.js`)
- [props concept](./note_images/37_props-concept.png "Title")

```javascript
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>

    </div>
  );
}
```

```javascript
function ExpenseItem(props) {
    
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}
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

**46. Module Introduction**
- Handling Events
- Update the UI and Working with "State"
- A closer look at components and State

**47. Listening to events and Working with event handler**
- `<button onClick={() => {console.log('Clicked!')} }> change title button </button>`
- `<button onClick={clickHandler}> change title button </button>`: we did not add `()` in JSX -> this function will be execute when parsing
- `{clickHandler}` point function to onClick event, executes the function for us whenever the click occurs
- If an element supports an event, then you can add a listener with react 

**48. How Component functions are executed**

- `title = 'Updated!'` -> onClick -> React not change the title
- React never repeat the initialize
- React goes through all of components when the application is initially rendered
- We need a way of telling react that something changed and that a certain component should be re-evaluated

=> special concept called state

**49. Working with 'State'**

- `clickHandler` should change title of component (re-evaluated and re-drawn on the screen)
- `import Reaact, { useState } from 'react';`
- React hook can be recognized by the fact that they start with the word "use"
- React hook cant be called outside of component function
- `useState()` always return an array [1, 2]:
    + 1: the current state value
    + 2: a function for updating that
- `const [title, setTitle] = useState(props.title);`
- `setTitle('Update!');`: not just assign a new value to some variable, re-evaluate component
- `console.log(title)` log the old `props.title`, `setTitle('Update!')` does not change the value right away, but instead schedules this state update
- if you have data, which might change, and where changes to that data should be reflected on the user interface then you need state


<div style='color:yellow'>June 22th 2022</div>

**50. A closer look at the "useState" Hook**
- Separate State for each component
- the console has 4 title in fisrt load, when clicking `Change Title` button, it only change the title that being clicked -> not effect others components
- 
```js
const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title)

    console.log(title)
    
    const clickHandler = () => {
        console.log(title);
        setTitle("updated!")
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
```
---
**NOTE**
why use `const [title, setTittle] = useState(props.title)` then assign new value in `setTitle("updated!")`
---

- Calling `useState` will tell React that it should manage some value for us, we never see that variable itself.
- we call a function and never assign new value to title with `props.title = "Updated!"` 

---
**NOTE**
How do we get the latest title value? 
---
- Calling `SetTitle` tell React reload the component -> then `const [title, setTitle] = useState(props.title);` also execute again -> update new title
---

**51. Sate can be updated in many ways!**

- upon user events (e.g. upon a click).
- You can update states for whatever reason you may have.
- when http requests complete
- for amount of time (timeout)


<div style='color:yellow'>June 24th 2022</div>

**52. Adding form inputs**

- Gather user input 
- `/NewExpense`, `NewExpense.jss`, `NewExpense.css`
- `ExpenseForm.js`, `ExpenseForm.css`

```js
import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tiltle</label>
                    <input type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
```

```js
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    return (
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    )
}

export default NewExpense
```

**53. Listening to User inputs**

- `onChange` event
- `(event)` in function
- `event.target.value` to get value from input
- `target` simple points at the DOM element for which the event occured

```js
const changeTitleHandler = (event) => {
    console.log(event.target.value)
} 
```

**54. Working with Multiple States**

- To make sure that we store the value and that it survives if that function would be re-executed and the component would be re-evaluated
- How can you manage more than one State? (useState):
    + `const [enteredTitle, setEnteredTitle] = useState('');`
    + `const [enteredAmount, setEnteredAmount] = useState('');`
    + `const [enteredDate, setEnteredDate] = useState('');`

- Even if `enteredAmount` is define at type number, it will be a number as a string when we get the value (same for date), -> that why we initialize with a string
- You often will have multipke States oer component

```js
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };


    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
```

**55. Using One State Instead (And What's Better)**

- 3 states are related to our form ->  pass to `useState` object (dict)
- the different is: you need to update all three properties and not just one
- ! React will replace the `enteredAmount` `enteredDate` if you not pass this key into the object when updating the state related to `enteredTitle, enteredAmount, enteredDate`
- It's your responsibility to make sure that the other data not get lost
- Rest opeator, `...userInput` -> then override the `title`
```js
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    };
    

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    };


    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    };

```
**56. Updating State That Depends On The Previous State**

- `function form`
- whenever you update state and you depend on the previous state, you should use an alternative form of this state updating function
- React schedules state updates, it doesn't perform them instantly, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot
```js
    const titleChangeHandler = (event) => {
        setUserInput((preState) => {
            return {...preState, enteredTitle: event.target.value}
        })
    };
```
=> this will ensure that you always operate on the latest state snapshot

**57. Handling Form Submission**

- button onClick="" event is not the best way of listening here, because there is a default behavior built into the browser and built into forums on web pages.
- ? if a button with type submit is pressed in overall forum element, will emit the event
- `<form onSubmit={}>`
- whenever a form is submitted, browser (client) send request to server (in this case is development server) -> we dont want to -> we want JS manually collect and combine data
- `event.preventDefault()`: prevent the default of this request being sent -> the request is not sent -> the page will now also not reload, stay on that page -> continue handling with JS

```js
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);
    };
```

**58. Adding Two-Way Binding**

- simple mean: listen to changes, pass new value back into the input
- reset or change the input programmatically
- It allows you to gather user input, but then also change it (upon form submission)
- value attribute to input element `value={enteredTittle}` so that when we change the state, we also change input (sound like infinite loop) -> call setEnteredTitle to set back empty value

```js
const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
```

**59. Child-to-Parent Component Communication (Bottom-up)**

- `props`: can only be passed from parent to child, we cant skip intermediate components
- how can we pass data from children to parent? -> use `props` and pass the function
- parent: `onSaveExpenseData={saveExpenseDataHandler}`, child: `props.onSaveExpenseData(expenseData);`
- parent: `<NewExpense onaddExpenseHandler={addExpenseHandler}></NewExpense>`, child: `props.onaddExpenseHandler(expenseData);`

**60. Lifting The Sate Up**

- It's not always that root app component to which you wanna lift your state up. The goal is to lift it up just as high as necessary in your Component Tree until you have a component which has both access to the components that generate data as well as the components that needs data

- [Lifting The Sate Up](./note_images/60_Lifting-state-up.png "Title")

**Assigment 2: Time to Practice: Working with Events & State**


**61. Controlled vs Uncontrolled Components & Stateless vs Stateful Components**

**Quiz 2: Learning Check: Working with Events & State**

1. How should you NOT listen to events when working with React?

-> That's the correct choice because this is how you should NOT set up event listening. This would be imperative code, you're not using React's features with this code and you would trigger some function that lives outside of React components and hence wouldn't be able to interact with React component state.

2. Which value should you pass to event listener props like onClick?

-> That's the correct choice - you want to pass a "pointer" at the to-be-executed function as a value to onClick etc. Then, this function gets executed "on your behalf" by React when the event occurs.

3. How can you communicate from one of your components to a parent (i.e. higher level) component?

-> That's the correct choice. In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

4. How can you change what a component displays on the screen?

-> Create some "State" value (via useState) which you can then change and output in JSX

5. Why do you need this extra "state" concept instead of regular JS variables which you change and use?

-> That's correct! React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

6. Which statement about useState is NOT correct?

-> That's the correct choice because this statement is wrong. Calling useState again will simply create a new state.

7. How can you update component state (created via useState)?

-> That's correct! useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.

8. How much state may you manage in one single component?

-> There's no restriction at all.

9. What's wrong about this code snippet?

```js
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
```

-> If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.

**62. Module Resources**

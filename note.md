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


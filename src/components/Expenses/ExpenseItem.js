import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title)

    // console.log(title)
    
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

export default ExpenseItem

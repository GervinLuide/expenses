import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";
import {useState} from "react";
const  ExpenseItem = (props) =>{
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }
    console.log(props)
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.expenseData.title}</h2>
                <div className='expense-item__price'>{props.expenseData.expenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
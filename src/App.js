import logo from './logo.svg';
import './App.css';

import Expenses  from "./components/Expenses/Expenses";
import NewExpense  from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New Jeans',
            price: 99.99
        }
    ]

    const addExpensehandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenseData={expenses[0]}></Expenses>
            <Expenses expenseData={expenses[1]}></Expenses>
        </div>
    );

}
export default App;
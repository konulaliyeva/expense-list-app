import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpensesByYear}/>
        <ExpenseList items={filteredExpensesByYear}/>
      </Card>
    </div>
  );
};

export default Expenses;

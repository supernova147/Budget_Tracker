/*
Be able to input fields to enter income & expense descriptions
^ same with amounts
add buttons to add income and expenses
--Display total budget income & expenses on UI (DOM)
---
Budget calculation 
Should calc the total budget based on income & expenses entered by user
Budget should be updated whenever a new income or expense is added
Income & expenses should be stored in separate arrays or objects
Application should correctly handle positive & negative expenses

===
Implement the ability to add income by entering description & amount
^ same with expenses
Application should PREVENT user from submitting empty input fields or invalid amounts
provide proper validation & error handling for input fields

-----
Display calc income, expenses & total budget on UI
Summary should update DYNAMICALLY whenever a new income or expense is added
----
Object-Oriented Programming 
Implement a budget class with properties & methods to handle income and total budget
encapsulate the budget-related functionality within the budget class
utilize object-oriented programming principles such as encapsulation, inheritance, or polymorphism
in implementation

Essentially, USER Input needs to be captured & collected. Options to add income/expense is required. Then; the budget needs to be calculated from the totals from income & expense to calculate budget.
*/

class Budget { //Creating class for the Budget Tracker, the constructor & all methods required will be under this class.
    constructor () { 

        this.addIncome = document.getElementById('add_income_input'); //Creating addIncome property
        this.addIncome.addEventListener('click', this.incomeAdd); //Creating an event listener w/ click so that the method 'incomeAdd' is called when a button(addIncome/'add_income_input') is pressed.

        this.addExpense = document.getElementById('add_expense_input'); //Creating addExpense property
        this.addExpense.addEventListener('click', this.expenseAdd); //Creating an event listener w/ click so that the method 'expenseAdd' is called when a button(addExpense/'add_expense_input') is pressed.

        this.Calculation = document.getElementById('calculate_result'); //Creating Calculation property
        this.Calculation.addEventListener('click', this.Calc); //Creating an event listener w/ click so that the method 'Calc' is called when a button(Calculation/'calculate_result') is pressed.

        this.totalIncome = document.getElementById("total_income"); //Creating totalIncome property
        this.totalExpense = document.getElementById("total_expense"); //Creating totalExpense property
        this.totalBudget = document.getElementById("calc_result"); //Creating totalBudget property
    }

    incomeAdd = () => { //Method that (when the user clicks the 'add income' button), adds a new input for them to use.

        const income_num = document.createElement('input'); //Declaring income_num
        income_num.type = "number"; //Adding type number to input
        income_num.classList.add('income_num'); //Adding 'income_num' class to income_num

        const income_desc = document.createElement('input'); //Declaring income_desc
        income_desc.type = "text"; //Adding type text to input
        income_desc.classList.add('income_desc'); //Adding 'income_desc' class to income_desc

        document.getElementById("income_label").appendChild(income_num); //Appending the income_num element to income_label
        document.getElementById("income_desc").appendChild(income_desc); //Appending the income_desc element to income_desc
    }

    expenseAdd = () => {

        const expense_num = document.createElement('input'); //Declaring expense_num
        expense_num.type = "number"; //Adding type number to input
        expense_num.classList.add('expense_num'); //Adding 'expense_num' class to expense_num

        const expense_desc = document.createElement('input'); //Declaring expense_desc
        expense_desc.type = "text"; //Adding type text to input
        expense_desc.classList.add('expense_desc'); //Adding 'expense_desc' class to income_desc

        document.getElementById("expense_label").appendChild(expense_num); //Appending the expense_num element to expense_label
        document.getElementById("expense_desc").appendChild(expense_desc); //Appending the expense_num element to expense_label
    }

    Calc = () => {
        let income_total = Array.from(document.getElementsByClassName("income_num")); //Creating an array for income totals from income_num class
        let expense_total = Array.from(document.getElementsByClassName("expense_num")); //Creating an array for expense totals from expense_num class
        //finishing this method at later point, but basically was going to retrieve all the values & then calculate & then display on the DOM.
    }
}

new Budget(); //Running the class.

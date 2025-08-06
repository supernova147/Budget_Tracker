
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
*/

//Important vars below - Established to capture income, expenses; and calc result.

let income = document.getElementById("income");
let income_description = document.getElementById("income_des");
let expense = document.getElementById("expenses");
let expenses_description = document.getElementById("expenses_des");

let calc_result = document.getElementById("calc_result");


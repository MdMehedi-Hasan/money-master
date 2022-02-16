document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = document.getElementById('income-field');
    const incomeValue = parseFloat(income.value);

    const food = document.getElementById('food-field');
    const foodValue = parseFloat(food.value);

    const rent = document.getElementById('rent-field');
    const rentValue = parseFloat(rent.value);

    const clothes = document.getElementById('clothes-field');
    const clothesValue = parseFloat(clothes.value);

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = parseFloat(totalExpenses.innerText);

    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);

    const savingAamount = document.getElementById('savings-amount');
    const savingAmountValue = parseFloat(savingAamount.innerText);

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseFloat(remainingBalance.innerText);
    //input id's has been taken 



    // clear input
    income.value = '';
    
})

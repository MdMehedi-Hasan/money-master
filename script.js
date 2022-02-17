function collectId(idName){
    const input = document.getElementById(idName);
    const inputValue = parseFloat(input.value);
    return inputValue;
}
function collectingId(idName){
    const text = document.getElementById(idName);
    return text;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeField = collectId('income-field');
    const foodField = collectId('food-field');
    const rentField = collectId('rent-field');
    const clothesField = collectId('clothes-field');
    const expenses = collectingId('total-expenses');
    const balance = collectingId('balance');
    // income field validation
    if (isNaN (incomeField) || incomeField<=0){
        document.getElementById('income-error').style.display='block';
        balance.innerText = 0;
    }
    else{
        // Major calculation
        const addingExpenses = foodField+rentField+clothesField;
        expenses.innerText=addingExpenses;
        const subtracting = incomeField-addingExpenses;
        balance.innerText = subtracting; 
        document.getElementById('income-error').style.display='none';
    }
    // Expense field validation
    if (isNaN (foodField) || isNaN (rentField) || isNaN (clothesField) || foodField<0 || rentField<0 || clothesField<0){
        document.getElementById('expense-error').style.display='block';
        document.getElementById('expense-error2').style.display='none';
    }
    else if(isNaN (incomeField)){
        balance.innerText = 0;
    }
    else if(incomeField<expenses.innerText) {
        document.getElementById('expense-error2').style.display='block';
        document.getElementById('expense-error').style.display='none';
        expenses.innerText = 0;
        balance.innerText = 0;
    }
    else{
        const addingExpenses = foodField+rentField+clothesField;
        expenses.innerText=addingExpenses;
        const subtracting = incomeField-addingExpenses;
        balance.innerText = subtracting; 
        document.getElementById('expense-error').style.display='none';
        document.getElementById('expense-error2').style.display='none';
    }
})
// savings section calculation

document.getElementById('save-btn').addEventListener('click',function(){
    const saving = collectingId('savings-amount');
    const remaining = collectingId('remaining-balance');
    const saveField = collectId('save-field')
    const incomeField = collectId('income-field');
    const balance = collectingId('balance');
    if (isNaN (saveField) || saveField<0){
        document.getElementById('save-error').style.display='block';
    }
    else if(saving.innerText>balance.innerText) {
        document.getElementById('save-error2').style.display='block';
        document.getElementById('save-error').style.display='none';
    }
    else{
        const calcPercantage = (incomeField*saveField)/100;
        saving.innerText = calcPercantage;
        remaining.innerText = parseFloat(balance.innerText) - parseFloat(saving.innerText);
        document.getElementById('save-error').style.display='none';
        document.getElementById('save-error').style.display='none';
    }
})

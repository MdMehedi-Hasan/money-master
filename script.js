function collectId(idName){
    const input = document.getElementById(idName);
    const inputValue = parseFloat(input.value);
    return inputValue;
}
function collectingId(idName){
    const text = document.getElementById(idName);
    return text;
}
/* function clearInput(id){
    const input = document.getElementById(idName);
    input.innerText = '';
    return input;
} */
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeField = collectId('income-field');
    const foodField = collectId('food-field');
    const rentField = collectId('rent-field');
    const clothesField = collectId('clothes-field');
    const expenses = collectingId('total-expenses');
    const balance = collectingId('balance');
    //input id's has been taken 
    const addingExpenses = foodField+rentField+clothesField;
    expenses.innerText=addingExpenses;
    const subtracting = incomeField-addingExpenses;
    balance.innerText = subtracting;
    // clearInput('food-field','rent-field','clothes-field');
})

document.getElementById('save-btn').addEventListener('click',function(){
    const saving = collectingId('savings-amount');
    const remaining = collectingId('remaining-balance');
    const saveField = collectId('save-field')
    const incomeField = collectId('income-field');
    const balance = collectingId('balance');
    const calcPercantage = (incomeField*saveField)/100;
    saving.innerText = calcPercantage;
    remaining.innerText = parseFloat(balance.innerText) - parseFloat(saving.innerText);
    // clearInput('income-field');
})

function collectId(idName){
    const input = document.getElementById(idName);
    const inputValue = parseFloat(input.value);
    input.value='';
    return inputValue;
}
function collectingInnerText(idName){
    const text = document.getElementById(idName);
    return text;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeField = collectId('income-field');
    const foodField = collectId('food-field');
    const rentField = collectId('rent-field');
    const clothesField = collectId('clothes-field');

    const expenses = collectingInnerText('total-expenses');
    const balance = collectingInnerText('balance');
    const saving = collectingInnerText('savings-amount');
    const remaining = collectingInnerText('remaining-balance');
    //input id's has been taken 

    const addingExpenses = foodField+rentField+clothesField;
    expenses.innerText=addingExpenses;

    const subtracting = incomeField-addingExpenses;
    balance.innerText = subtracting;
    
})

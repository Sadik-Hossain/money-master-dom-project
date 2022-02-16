// calculate event added
document.getElementById('calculate').addEventListener('click', function () {
    
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const totalExpenses = document.getElementById('expenses');
    const balance = document.getElementById('balance');
    // expense calculation
    totalExpenses.innerText = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);

    //balance calculation
    balance.innerText = parseFloat(income.value) - parseFloat(totalExpenses.innerText);
})
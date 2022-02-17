//----------------getting Element--------------------------------
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpenses = document.getElementById('expenses');
const balance = document.getElementById('balance');

//----------------button event added------------------------
document.getElementById('calculate').addEventListener('click', function () {

    let incomeValue = income.value;
    let foodValue = food.value;
    let rentValue = rent.value;
    let clothesValue = clothes.value;

    //---------------validation----------------------------------
    // empty validation
    if (incomeValue == '' || foodValue == '' || rentValue == '' || clothesValue == '') {
        document.getElementById('validation-msg-1').style.display = 'block'

    }
    // string validation
    else if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        document.getElementById('validation-msg-2').style.display = 'block'

    }
    // negative number validation
    else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        document.getElementById('validation-msg-2').style.display = 'block'
    }
    else {
        calculation(incomeValue, foodValue, rentValue, clothesValue)
    }

})

//-------------------Expense-&-Balance----------------------------------------
function calculation(income, food, rent, clothes) {
    // expense updating
    totalExpenses.innerText = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    //storing expense and balance
    let currentSpend = parseFloat(totalExpenses.innerText)
    let currentBalance = parseFloat(income) - currentSpend
    if (currentBalance >= 0) {
        //balance updating
        balance.innerText = parseFloat(income) - parseFloat(totalExpenses.innerText);
    }
    else {
        document.getElementById('validation-msg-3').style.display = 'block'

    }
}
//--------------closeBtn event---------------------------------------------------------------
document.getElementById('close-1').addEventListener('click', function () {
    document.getElementById('validation-msg-1').style.display = 'none';
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';


})
document.getElementById('close-2').addEventListener('click', function () {
    document.getElementById('validation-msg-2').style.display = 'none';
    income.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
})
document.getElementById('close-3').addEventListener('click', function () {
    document.getElementById('validation-msg-3').style.display = 'none';

})
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
    const clothesValue = clothes.value;
    
    //---------------validation----------------------------------
    // empty validation
    if (incomeValue == '' || foodValue == '' || rentValue == '' || clothesValue == '') {
        alert('please enter a number');

    }
    // string validation
    else if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        alert('please enter a number');
    }
    // negative number validation
    else if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
        alert('please enter a positive number');

    }
    else {
        calculation()
    }
    
})

//-----sum--&--subtraction----------------------------------------
function calculation() {
    let totalExpensesValue = totalExpenses.innerText;
    let balanceValue = balance.innerText;
    // expense calculation
    totalExpenses.innerText = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
if(parseFloat(totalExpensesValue) < parseFloat(balanceValue)){
    alert('youre broke');

}
    //balance calculation
   else{
    balance.innerText = parseFloat(income.value) - parseFloat(totalExpenses.innerText);

   }
}
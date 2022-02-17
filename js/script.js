//----------------getting Element--------------------------------
const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const totalExpenses = document.getElementById("expenses");
const balance = document.getElementById("balance");
const savingInput = document.getElementById("saving-input");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

//----------------calculate button event added------------------------
document.getElementById("calculate").addEventListener("click", function () {
    let incomeValue = income.value;
    let foodValue = food.value;
    let rentValue = rent.value;
    let clothesValue = clothes.value;

    //---------------validation----------------------------------
    // empty validation
    if (
        incomeValue == "" ||
        foodValue == "" ||
        rentValue == "" ||
        clothesValue == ""
    ) {
        document.getElementById("validation-msg-1").style.display = "block";
    }
    // string validation
    else if (
        isNaN(incomeValue) ||
        isNaN(foodValue) ||
        isNaN(rentValue) ||
        isNaN(clothesValue)
    ) {
        document.getElementById("validation-msg-1").style.display = "block";
    }
    // negative number validation
    else if (
        incomeValue < 0 ||
        foodValue < 0 ||
        rentValue < 0 ||
        clothesValue < 0
    ) {
        document.getElementById("validation-msg-2").style.display = "block";
    } else {
        calculation(incomeValue, foodValue, rentValue, clothesValue);
    }
});

//-------------------Expense-&-Balance----------------------------------------
function calculation(income, food, rent, clothes) {
    // expense updating
    totalExpenses.innerText =
        parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    //storing expense and balance
    let currentSpend = parseFloat(totalExpenses.innerText);
    let currentBalance = parseFloat(income) - currentSpend;
    if (currentBalance >= 0) {
        //balance updating
        balance.innerText =
            parseFloat(income) - parseFloat(totalExpenses.innerText);
    } else {
        document.getElementById("validation-msg-3").style.display = "block";
    }
}


//----------------Saving button event added------------------------------------------------------
document.getElementById("save-btn").addEventListener("click", function () {

    let savingInputAmount = savingInput.value;

    //---------------saving section validation----------------------------------
    // empty validation
    if (savingInputAmount == "") {
        document.getElementById("saving-validation-msg-1").style.display = "block";
    }
    // string validation
    else if (isNaN(savingInputAmount)) {
        document.getElementById("saving-validation-msg-1").style.display = "block";
    }
    // negative number validation
    else if (savingInputAmount < 0) {
        document.getElementById("saving-validation-msg-2").style.display = "block";
    } else {
        savingCalculation(savingInputAmount);
    }
});
//------------------saving calculation---------------------------------------------
function savingCalculation(saving) {
    //converting percentage
    let PercentageAmount = parseFloat(saving) / 100;
    //validating given income and balance
    if (parseFloat(income.value) < 0 && parseFloat(balance.innerText) < 0) {
        document.getElementById("validation-msg-2").style.display = "block";
    }

    //storing savings
    let currentSaving = parseFloat(income.value) * PercentageAmount;
    //checking ramaining balance after save
    let currentRemaining = parseFloat(balance.innerText) - currentSaving;

    //updating saving
    savingAmount.innerText = currentSaving.toFixed(2);

    if (currentRemaining > 0) {
        remainingBalance.innerText = currentRemaining;
    }

    else {
        document.getElementById("saving-validation-msg-3").style.display = "block";
    }
}

//------------------close button onclick function---------------------------------------------------------------

function msg(msg) {
    document.getElementById(msg).style.display = "none";
    if (msg == "validation-msg-1" || msg == "validation-msg-2") {
        clear();
    }
    if (msg == "validation-msg-3") {
        document.getElementById("validation-msg-3").style.display = "none";
        totalExpenses.innerText = "00";
        balance.innerText = "00";
    }
    if (msg == "saving-validation-msg-1" || msg == "saving-validation-msg-2") {
        savingAmount.innerText = "00";
    }
    if (msg == "saving-validation-msg-3") {
        savingAmount.innerText = "00";
        remainingBalance.innerText = "00";
    }
}
//---------------clear function----------------------------------------------
function clear() {
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";
    totalExpenses.innerText = "00";
    balance.innerText = "00";
}



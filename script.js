
//Login Button Event handler
const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";
    const transactionForm = document.getElementById("transactionForm");
    transactionForm.style.display = "block";
});
//Deposit Button Event Handler
const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");
    update_span_text("current", depositNumber);
    update_span_text("balance", depositNumber);
    inputFieldEmpty("depositAmount");
});
//Withdraw Button Event handler
const withdrawButton = document.getElementById("withdrawBtn");
withdrawButton.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");    
    update_span_text("withdraw", withdrawNumber);
    update_span_text("balance", -1 * withdrawNumber);
    inputFieldEmpty("withdrawAmount");

})

//Reusable function
function inputFieldEmpty(id) {
    document.getElementById(id).value = "";
}
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const depositNumber = parseFloat(amount);
    return depositNumber;
}
function update_span_text(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
// Deposit
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');

// Withdraw
let withdrawValue = document.getElementById('withdraw-value');
let withdrawOutput = document.getElementById('withdraw-output');

// Total Balance
let balanceOutput = document.getElementById('balance-output');


function addMoney(currentAmount, newAmount) {
    return Number(currentAmount) + Number(newAmount);
}

function getMoney(currentAmount, newAmount) {
    return Number(currentAmount) - Number(newAmount);
}

function deposit() {
    /*     depositOutput.innerText =
            Number(depositOutput.innerText) + Number(depositValue.value); */
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalDeposit;

    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value)
    balanceOutput.innerText = totalBalance;

    /*     balanceOutput.innerText =
            Number(depositValue.value) + Number(balanceOutput.innerText); */

    depositValue.value = '';
};

function withdraw() {
    /*     withdrawOutput.innerText =
            Number(withdrawValue.value) + Number(withdrawOutput.innerText); */
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = totalWithdraw;

    /* balanceOutput.innerText =
        Number(balanceOutput.innerText) - Number(withdrawValue.value); */
    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;

    withdrawValue.value = '';
}
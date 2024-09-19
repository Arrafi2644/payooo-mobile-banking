// Add Money

document.getElementById('add-money-btn').addEventListener('click', function(event){
  event.preventDefault();
//   console.log("clicked add btn")  

const addMoneyInput = document.getElementById('add-amount-input').value ;
const addMoneyAmount = parseFloat(addMoneyInput);
// console.log(addMoneyInput)

const payoooPin = document.getElementById('add-payooo-pin').value;
// console.log(payoooPin);

if(payoooPin === '12345'){
    const currentBalace = document.getElementById('available-balance').innerText;
    // console.log(currentBalace);
    const availableCurrentBalance = parseFloat(currentBalace);
    console.log(availableCurrentBalance);

    newBalance = availableCurrentBalance + addMoneyAmount;
    document.getElementById('available-balance').innerText = newBalance;

    // clean the input field 
    addMoneyInput = document.getElementById('add-amount-input').value = "";
    document.getElementById('add-payooo-pin').value = "";
}
else{
    alert("Something wrong! Please try again.")
}
});


// Cash Out 

document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("cash out btn clicked")

    const cashOutInput = document.getElementById('cashout-amount-input').value;
    const cashOutAmount = parseFloat(cashOutInput);
    // console.log(cashOutAmount)

    const payoooPin = document.getElementById('cashout-payooo-pin').value;
    // console.log(payoooPin)

    if(payoooPin === '12345'){
        const currentBalance = document.getElementById('available-balance').innerText;
        const availableCurrentBalance = parseFloat((currentBalance));
        // console.log(availableCurrentBalance)

        if(cashOutAmount <= availableCurrentBalance){
            const newBalance = availableCurrentBalance - cashOutAmount;
            document.getElementById('available-balance').innerText = newBalance;

            // clear the input field 
            document.getElementById('cashout-amount-input').value = "";
            document.getElementById('cashout-payooo-pin').value = "";
        }
        else{
            alert('You do not have enough balance to cash out...')
        }


    }else{
       alert( "Something Wrong!..Please try again...")
    }
});


// show cash out form and hide add money form

document.getElementById('show-cash-out-form-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});


// show add money form and hide  cash out form ;
document.getElementById('show-add-money-form-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
});




// console.log('Hello')

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("clicked")

    const accountNumber = document.getElementById('account-number-input').value;
    console.log(accountNumber);

    const payoooPinNumber = document.getElementById('payooo-pin').value;

    if(accountNumber === "01751166818" && payoooPinNumber === '12345'){
        window.location.href = "home.html"
    }else{
        alert("Wrong account number or pin")
    }
})
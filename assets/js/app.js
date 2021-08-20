

function updateNumber(product, price, isAdd) {
    const productQuantity = document.getElementById(product + '-quantity');
    const button = document.getElementById(product+'-minus');
    if (isAdd) {
        productQuantity.value = Number(productQuantity.value) + 1;
        if (productQuantity.value >= 1) {
            button.removeAttribute('disabled', false);
        }
    } else {
        if (productQuantity.value > 0) {
            productQuantity.value = Number(productQuantity.value) - 1;
       }
        if (productQuantity.value == 0) {
            button.setAttribute('disabled', true);
        }
    }
    const priceValue = document.getElementById(product + '-pric');
    const porductPrice = Number(productQuantity.value) * price;
    priceValue.innerText = porductPrice;
   totalPrice();
}




function priceUpdate(input) {
    const quantity = document.getElementById(input + '-quantity');
    return Number(quantity.value);
}

function totalPrice() {
    const phoneTotal = priceUpdate('phone') * 1219;
    const caseTotal = priceUpdate('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = Math.round(subTotal + tax);
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
totalPrice();
document.getElementById('case-plus').addEventListener('click', function () {
    
    updateNumber('case', 59, true);
    
})
document.getElementById('case-minus').addEventListener('click', function () {
   
     updateNumber('case', 59, false);
})
document.getElementById('phone-plus').addEventListener('click', function () {
     updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
     updateNumber('phone', 1219, false);
})
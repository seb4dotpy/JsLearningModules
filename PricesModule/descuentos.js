//calculate discount
function discountCalculation(amount,discount){
    var finalPrice = amount - totalDiscount(amount,discount);
    return finalPrice ;
}

function totalDiscount(amount,discount){
    var finalDiscount = amount * (discount /100);
    return finalDiscount;
}

//html interaction

function clickDiscount(){
    const inputAmount = document.getElementById("inputAmount");
    const inputDiscount = document.getElementById("inputDiscount");

    const amount = inputAmount.value;
    const discount = inputDiscount.value;

    const finalDiscount = discountCalculation(amount, discount);

    const resultHtml = document.getElementById("result");

    resultHtml.innerText =  "Your final price is $" + finalDiscount + " , and your saving is $" + totalDiscount(amount,discount);

}

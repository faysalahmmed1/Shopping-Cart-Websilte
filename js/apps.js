function updateProductNumber (product, price, isIncreasing){

    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0 ){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber; 

    //update product Total

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate total 

    calculateTotal();

}

function getInputValue (product){
    const productInput =  document.getElementById(product +  '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal (){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const TotalPrice = subTotal + tex;
    
    //update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amound').innerText = tex;
    document.getElementById('total-price').innerText = TotalPrice;
    
}


document.getElementById('phone-plus').addEventListener('click', function(){
    // updatePhone(true);
    updateProductNumber('phone' , 1219, true);
     

});
document.getElementById('phone-minus').addEventListener('click', function(){
    // updatePhone(false);
    updateProductNumber('phone', 1219,  false);
     

})

//handel case increasing dicreasing

document.getElementById('case-plus').addEventListener('click',function(){

    updateProductNumber('case' , 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    
    updateProductNumber('case', 59, false);
    
})




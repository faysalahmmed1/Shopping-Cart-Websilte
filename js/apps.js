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

}

function getInputValue (){
    const phoneInput =  document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal (){
    
    const phoneTotal = getInputValue() * 1219;
    
    
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




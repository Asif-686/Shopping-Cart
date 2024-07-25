var totalPrice = 1278;
const minus1 = document.getElementById ("minus1").addEventListener("click",function(){
    var itemNumber = parseFloat(document.getElementById("input1").value);
    var itemPrice = parseFloat(document.getElementById("price1").innerText);
    if(itemNumber <= 0){
        itemNumber = 0;
        itemPrice = 0;
    }
    else {
        itemNumber--;
        totalPrice = totalPrice - 1219;
        itemPrice = itemNumber * 1219;
    }
    document.getElementById("input1").value = itemNumber;
    document.getElementById("price1").innerText = itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
})
const minus2 = document.getElementById ("minus2").addEventListener("click",function(){
    var itemNumber = parseFloat(document.getElementById("input2").value);
    var itemPrice = parseFloat(document.getElementById("price2").innerText);
    if(itemNumber <= 0){
        itemNumber = 0;
    }
    else {
        itemNumber--;
        totalPrice =totalPrice - 59;
        itemPrice = itemNumber * 59;
    }
    document.getElementById("input2").value = itemNumber;
    document.getElementById("price2").innerText = itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
})
const plus1 = document.getElementById ("plus1").addEventListener("click",function(){
    var itemNumber = parseFloat(document.getElementById("input1").value);
    var itemPrice = parseFloat(document.getElementById("price1").innerText);
        itemNumber++;
        totalPrice =totalPrice + 1219;
        itemPrice = itemNumber * 1219;
    document.getElementById("input1").value = itemNumber;
    document.getElementById("price1").innerText = itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
})
const plus2 = document.getElementById ("plus2").addEventListener("click",function(){
    var itemNumber = parseFloat(document.getElementById("input2").value);
    var itemPrice = parseFloat(document.getElementById("price2").innerText);
        itemNumber++;
        totalPrice =totalPrice + 59;
        itemPrice = itemNumber * 59;      
    document.getElementById("input2").value = itemNumber;
    document.getElementById("price2").innerText = itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
})
const remove = document.getElementById("remove").addEventListener("click",function () {
    var itemPrice = parseFloat(document.getElementById("price1").innerText);
    totalPrice = totalPrice - itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
    document.getElementById ("item1").style.display = "none";
})
const remove1 = document.getElementById("remove1").addEventListener("click",function () {
    var itemPrice = parseFloat(document.getElementById("price2").innerText);
    totalPrice = totalPrice - itemPrice;
    document.getElementById ("sub").innerText = totalPrice;
    document.getElementById ("total").innerText = totalPrice;
    document.getElementById ("item2").style.display = "none";
})
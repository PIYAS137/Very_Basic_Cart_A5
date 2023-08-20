
// ------get ProductNameAndPrice Function--------//
function getProductName(productNameId) {
    var nameText = document.getElementById(productNameId).innerText;
    return nameText;
}
function getProductPrice(productPriceId) {
    var priceText = document.getElementById(productPriceId).innerText;
    var price = parseFloat(priceText);
    return price;
}
// ------get ProductNameAndPrice Function--------//


document.getElementById("applyBTN").addEventListener("click",function(){
    var FinalDiscountElement=document.getElementById("finalDiscountElement");
    var FinalTotalPricePreset=getProductPrice("finalTotalPrice");
    var FinalTotalElement=document.getElementById("finalTotal");
    var FinalDiscout=0;
    var FinalTotal=FinalTotalPricePreset
    var text = document.getElementById("couponInput").value;
    
    console.log(text)
    if(text == "SELL200"){
        FinalDiscout=FinalTotalPricePreset*20/100;
        FinalTotal=FinalTotalPricePreset-FinalDiscout;
    }
    FinalDiscountElement.innerText=FinalDiscout;
    FinalTotalElement.innerText=FinalTotal;
})




// --------cart funciton----------//
function CartNameCreateAndSet(productName,productPrice) {
    var cartUL = document.getElementById("productNameInCart");
    var newElement = document.createElement("li");
    newElement.innerText =(cartUL.childElementCount+1)+". "+ productName;
    cartUL.appendChild(newElement)



    var FinalTotalPriceElement=document.getElementById("finalTotalPrice");
    var FinalTotalElement=document.getElementById("finalTotal");
    var CouponButtonElement=document.getElementById("applyBTN");


    var FinalTotalPricePREV=getProductPrice("finalTotalPrice");
    var FinalTotalPricePreset=FinalTotalPricePREV+productPrice;
    var FinalTotal=FinalTotalPricePreset;
    


    if(FinalTotalPricePreset>0){
        var purchaseButtonElement=document.getElementById("makePurchaseBtn")
        purchaseButtonElement.classList.add("cursor-pointer")
        purchaseButtonElement.classList.add("bg-[#E527B2]")
        purchaseButtonElement.removeAttribute("disbled")
    }else{
        purchaseButtonElement.setAttribute("disbled")
    }
    if(FinalTotalPricePreset>=200){
        document.getElementById("buttonBgDiv").classList.add("bg-[#E527B2]")
        CouponButtonElement.classList.add("cursor-pointer")
        CouponButtonElement.removeAttribute("disbled",true)
    }else{
        CouponButtonElement.setAttribute("disbled",true)
    }

    FinalTotalPriceElement.innerText=FinalTotalPricePreset;
    FinalTotalElement.innerText=FinalTotal;

}

// --------cart funciton----------//



document.getElementById("card1").addEventListener("click", function () {
    var productName = getProductName("Card-1-ProductName");
    var productPrice = getProductPrice("Card-1-ProductPrice");
    CartNameCreateAndSet(productName,productPrice)
})
document.getElementById("card2").addEventListener("click", function () {
    var productName = getProductName("Card-2-ProductName");
    var productPrice = getProductPrice("Card-2-ProductPrice");
    CartNameCreateAndSet(productName,productPrice)
})
document.getElementById("card3").addEventListener("click", function () {
    var productName = getProductName("Card-3-ProductName");
    var productPrice = getProductPrice("Card-3-ProductPrice");
    CartNameCreateAndSet(productName,productPrice)
})
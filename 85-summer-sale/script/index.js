
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
    var FinalDiscout=0.00;
    var FinalTotal=FinalTotalPricePreset
    var text = document.getElementById("couponInput").value;
    
    console.log(text)
    if(text == "SELL200"){
        console.log("INNER")
        FinalDiscout=(FinalTotalPricePreset*20/100).toFixed(2);
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
        purchaseButtonElement.removeAttribute("disabled")
    }
    if(FinalTotalPricePreset>=200){
        document.getElementById("buttonBgDiv").classList.add("bg-[#E527B2]")
        CouponButtonElement.classList.add("cursor-pointer")
        CouponButtonElement.removeAttribute("disabled")
    }

    FinalTotalPriceElement.innerText=FinalTotalPricePreset;
    FinalTotalElement.innerText=FinalTotal;

}

// --------cart funciton----------//

// ----------refresh code---------//
document.getElementById("closeDiv").addEventListener("click",function(){
    document.getElementById("finalTotalPrice").innerText="00.00";
    document.getElementById("finalDiscountElement").innerText="00.00"
    document.getElementById("finalTotal").innerText="00.00"
    document.getElementById("productNameInCart").innerHTML=``
    document.getElementById("buttonBgDiv").classList.remove("bg-[#E527B2]")
    document.getElementById("buttonBgDiv").classList.add("bg-gray-400")
    document.getElementById("makePurchaseBtn").classList.remove("bg-[#E527B2]")
    document.getElementById("makePurchaseBtn").classList.add("bg-gray-400")
    document.getElementById("applyBTN").removeAttribute("disabled")
    document.getElementById("makePurchaseBtn").removeAttribute("disabled")
    document.getElementById("couponInput").value="";

})
// ----------refresh code---------//


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
// 1. function to load all Items 
document.addEventListener("DOMContentLoaded",()=>{

    // ☣️step1: load all the button to apply function
    let addtocartBtn=document.querySelectorAll(".addtocard-btn")
    // console.log(addtocartBtn[0])
    // console.log(addtocartBtn[0].parentElement.parentElement.parentElement)
    console.log(addtocartBtn)

    // ☣️step2: Adding the functionality for button

    addtocartBtn.forEach((btn)=>{
        
        // open & close  
        // console.log("Btn",btn)
        
        btn.addEventListener("click",(e)=>{
            // console.log(e.target)

            // open & close  
            let productInfo=btn.parentElement.parentElement.parentElement
            // console.log(productInfo)
            
            let Ptitle=productInfo.querySelector(".product-title").innerText
            // console.log(Ptitle)
            
            let Pprice=productInfo.querySelector(".price").innerText
            let PImage=productInfo.querySelector(".product-img").src
            // let Pdescrption=productInfo.querySelector(".product-description").innerText// optional

            let selectedProd={
                title:Ptitle,
                price:Pprice,
                image:PImage
            }
            console.log(selectedProd)
        })
    })
})


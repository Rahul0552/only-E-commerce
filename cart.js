
document.addEventListener("DOMContentLoaded",()=>{
    // loading the items for local storage
})





function UpdatecartUi(){
    let cartsect=document.querySelector(".cart")
    cartsect.innerHTML=""

    //step:2 print the items
    cartItems.forEach((ele=>{
        let cartprod=document.createElement("div")
        cartprod.className="col-12 col-sm-12 col-md-3 col-lg-3"

        // attaching the card section to cols 
        cartprod.innerHTML=`
        <div class="card product text-dark" style="width: 14.5rem; background-color: #dbf4e7;">
        <img src="./assert/shop/branded cloths/s1.jpg" class="card-img-topproduct-img  product-img img-thumbnail rounded-1 mx-auto my-2" style="width: 14rem;" alt="...">
        <div class="card-body product-info">
          <a href="" class="link-underline link-offset-2 link-underline-opacity-0 link-underline-opacity-50-hover">
          <p class="card-title product-title  my-2 pb-1  fs-6">Comfort & Style :<br> Fashionably Comfortable.. Best  jeans........</p></a>
          <div class="d-flex justify-content-around">
            <p class="card-text product-description price gap-1 my-2  mx-1"><i class="bi bi-currency-rupee"></i>800</p>
            
            
            <div class="cart-values">
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>


          </div>
        </div>
      </div>`

        adding the funcitonality 

    }))
}

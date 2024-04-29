const data = [
  {
    productName: "Red Printed T-Shirt",
    price: 50.0,
    image: "images/product-1.jpg",
    feature: true,
  },
  {
    productName: "HRX Sport Shoes",
    price: 75.0,
    image: "images/product-2.jpg",
    feature: true,
  },
  {
    productName: "HRX grey track-point",
    price: 45.0,
    image: "images/product-3.jpg",
    feature: true,
  },
  {
    productName: "Blue Printed T-Shirt",
    price: 50.0,
    image: "images/product-4.jpg",
    feature: true,
  },
  {
    productName: "grey army shose",
    price: 90.0,
    image: "images/product-5.jpg",
  },
  {
    productName: "black Printed T-Shirt",
    price: 30.0,
    image: "images/product-6.jpg",
  },
  {
    productName: "Socks Printed HRX",
    price: 10.0,
    image: "images/product-7.jpg",
  },
  {
    productName: "Rolex black watch",
    price: 130.0,
    image: "images/product-8.jpg",
  },
  {
    productName: "Rolex grey watch ",
    price: 110.0,
    image: "images/product-9.jpg",
  },
  {
    productName: "Men's Casual shoes  ",
    price: 80.0,
    image: "images/product-10.jpg",
  },
  {
    productName: "Jogging shose grey ",
    price: 60.0,
    image: "images/product-11.jpg",
  },
  {
    productName: "HRX blaxk trouser ",
    price: 180.0,
    image: "images/product-12.jpg",
  },
];

const featureCategory = document.querySelector(".feature-category");
const allProducts = document.querySelector(".all-products");
const featureProducts = document.querySelector(".featureProducts");
const cartResponsive = document.querySelector(".cart_responsive");
const cartContaineer = document.querySelector(".cart-containeer");
const cartCount = document.querySelector(".cart-count");
var cart = [];
// featureCategory.style.background = "red";

// featureCategory.addEventListener("click", () => alert("helo"));

// add featureProducts products dynamicaly

const featureProductsList = () => {
  const fProducts = data.filter((val) => val.feature === true);
  if (featureProducts) {
    clutter = "";
    fProducts.map((val, index) => {
      return (clutter += `<div class="feature-item">
                <div class="img">
                <img src=${val.image} alt=""></div>
                <div class="feature-content">
                    <h3>${val.productName}</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>${"$" + val.price}</p>
                    <button data-index=${index} class='addtocart'>add to cart</button>
                    </div>
                    </div>`);
    });
    featureProducts.innerHTML = clutter;
  }
};

// add products dynamically in shop page
const addProducts = () => {
  if (allProducts) {
    var clutter = "";
    data.map(
      (val, index) =>
        (clutter += `<div class="feature-item">
                <div class="img">
                <img src=${val.image} alt=""></div>
                <div class="feature-content">
                    <h3>${val.productName}</h3>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>${"$" + val.price}</p>
                    <button data-index=${index} class='addtocart'>add to cart</button>
                </div>
            </div>`)
    );
    allProducts.innerHTML = clutter;
  }
};

// added to cart funcationality
const addToCart = () => {
  if (featureCategory) {
    featureCategory.addEventListener("click", (e) => {
      alert("hh");
      if (e.target.classList.contains("addtocart")) {
        console.log(e.target);
        const clickedProductIndex = e.target.dataset.index;
        const clickProduct = data[clickedProductIndex];
        cart.push({ ...data[e.target.dataset.index], quantity: 1 });
        localStorage.setItem("cartItem", JSON.stringify(cart));
        updateCartCount();
      }
    });
  }
};

// accessing cartItems from localStorage

// accessing cartItems from localStorage
const getItemFromLocalStorage = () => {
  const getItem = localStorage.getItem("cartItem");
  if (getItem) {
    let carrt = JSON.parse(getItem);
    // Update quantity values for each item in the cart from local storage
    carrt.forEach((item) => {
      const index = cart.findIndex((i) => i.productName === item.productName);
      if (index !== -1) {
        cart[index].quantity = item.quantity;
      }
    });
    updateCartCount();
    return carrt;
  } else {
    return [];
  }
};

// const getItemFromLocalStorage = () => {
//   const getItem = localStorage.getItem("cartItem");
//   if (getItem) {
//     let carrt = JSON.parse(getItem);
//     carrt.forEach((item) => {
//       const index = cart.findIndex((i) => i.productName === item.productName);
//       if (index !== -1) {
//         cart[index].quantity = item.quantity;
//       }
//     });

//     updateCartCount();
//     return carrt;
//   } else {
//     return [];
//   }
// };

// show products in cart dynamically

const showProductsInCart = () => {
  if (cartResponsive) {
    if (cart.length > 0) {
      let clutter = "";
      cart.map(
        (val, index) =>
          (clutter += ` <div class="tr_item cart-Box">
                <div class="td_item item_img">
                  <img
                    src=${val.image}
                    alt=${val.productName}
                  />
                </div>
                <div class="td_item item_name">
                  <label class="main">${val.productName}</label>
                  <label class="sub">Ref. 007891987</label>
                </div>
                <div class="td_item item_color">
                  <label>Blue</label>
                </div>
               <!-- <div class="td_item item_qty ">
                <input type='number' class="quantity-input" value="1" data-index="${index}">              
                </div>--> 

                <div class="quantity"> 
                <div class="qtyValue">1</div>
                <div class="arrows">
                
                <i class="fa fa-sort-asc arrowUp" data-index=${index}></i>
                <i class="fa fa-caret-down arrowDown" data-index=${index}></i>
                
                </div></div>
                <div class="td_item item_price">
                  <label>${"$" + val.price}</label>
                </div>
                <div class="td_item item_remove">
                  <span class="material-icons-outlined remove-item "data-index="${index}" >close</span>
                </div>
              </div>`)
      );
      // onclick = "removeCartItem()";
      cartResponsive.innerHTML = clutter;
    } else {
      cllutter = `<div class="empty-cart-message">Your cart is empty<img src="images/cart.png" alt="" class='empty-cart-img'/>.</div> `;
      cartResponsive.innerHTML = cllutter;
    }
    attachRemoveItemEvent();
  }
};

// cartCount functionality

const updateCartCount = () => {
  if (cartCount) {
    const getCartCount = localStorage.getItem("cartItem");
    const lCartCount = JSON.parse(getCartCount);
    if (lCartCount) {
      cartCount.innerHTML = lCartCount.length;
    }
  }
};

// removeItems funcationality

const attachRemoveItemEvent = () => {
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      const filterCart = cart.filter((val, ind) => ind !== index);
      cart = filterCart;
      localStorage.setItem("cartItem", JSON.stringify(cart));
      showProductsInCart();
      updateCartCount();
      calculateSubtotal();
      updateQty();

      console.log(filterCart);
    });
  });
};

// update quantity funcationality

const updateQty = () => {
  const arrowUp = document.querySelectorAll(".arrowUp");
  const arrowDown = document.querySelectorAll(".arrowDown");

  arrowUp.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      console.log(e.target.dataset.index);
      const index = parseInt(e.target.dataset.index);
      const product = cart[index];
      product.quantity = (product.quantity || 1) + 1;
      const qtyValue =
        arrow.parentElement.parentElement.querySelector(".qtyValue"); // Select qtyValue for the specific product
      qtyValue.textContent = product.quantity;

      const priceLabel = arrow
        .closest(".tr_item")
        .querySelector(".item_price label");
      const newPrice = product.quantity * product.price;
      priceLabel.textContent = "$" + newPrice.toFixed(0); // Assuming price is stored as a decima
      localStorage.setItem("cartItem", JSON.stringify(cart));
      calculateSubtotal();
    });
  });

  arrowDown.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      const product = cart[index];
      if (product.quantity > 0) {
        product.quantity -= 1;
        const qtyValue =
          arrow.parentElement.parentElement.querySelector(".qtyValue"); // Select qtyValue for the specific product
        qtyValue.textContent = product.quantity;

        const priceLabel = arrow
          .closest(".tr_item")
          .querySelector(".item_price label");
        const newPrice = product.quantity * product.price;
        priceLabel.textContent = "$" + newPrice.toFixed(0); // Assuming price is stored as a decimal
        localStorage.setItem("cartItem", JSON.stringify(cart));
        calculateSubtotal();
      }
    });
  });
};

// clear cart funcationality

const clearCompCart = () => {
  const clearCart = document.querySelector(".clear-cart");
  if (clearCart) {
    clearCart.addEventListener("click", () => {
      localStorage.removeItem("cartItem");
      cart = [];
      showProductsInCart();
      calculateSubtotal();
    });
  }
};

// subtotal funcationality
const calculateSubtotal = () => {
  // const subtotal_ = document.querySelector(".subtotal_");
  const checkoutTotal = document.querySelector(".checkout-total");
  const checkoutSubTotal = document.querySelector(".checkout-subtotal");
  let subtotal = 0;

  if (cart.length > 0) {
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
  } else {
    subtotal = 0;
  }
  // subtotal_.textContent = subtotal;
  checkoutTotal.textContent = "$" + subtotal;
  const shippingFee = subtotal * 0.05;
  const shippingFeeWithTex = subtotal + shippingFee;

  checkoutSubTotal.textContent = "$" + shippingFeeWithTex;
};

var cart = getItemFromLocalStorage();
showProductsInCart();
addProducts();
featureProductsList();
addToCart();
updateQty();
clearCompCart();
calculateSubtotal();

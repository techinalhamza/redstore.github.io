const data = [
  {
    productName: "Red Printed T-Shirt",
    price: 50.0,
    image: "images/product-1.jpg",
  },
  {
    productName: "HRX Sport Shoes",
    price: 75.0,
    image: "images/product-2.jpg",
  },
  {
    productName: "HRX grey track-point",
    price: 45.0,
    image: "images/product-3.jpg",
  },
  {
    productName: "Blue Printed T-Shirt",
    price: 50.0,
    image: "images/product-4.jpg",
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
const cartResponsive = document.querySelector(".cart_responsive");
const cartContaineer = document.querySelector(".cart-containeer");
const cartCount = document.querySelector(".cart-count");
var cart = [];

const addProducts = () => {
  if (featureCategory) {
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
    featureCategory.innerHTML = clutter;
  }
};
const addToCart = () => {
  if (featureCategory) {
    featureCategory.addEventListener("click", (e) => {
      if (e.target.classList.contains("addtocart")) {
        const clickedProductIndex = e.target.dataset.index;
        const clickProduct = data[clickedProductIndex];
        cart.push(data[e.target.dataset.index]);
        localStorage.setItem("cartItem", JSON.stringify(cart));
        updateCartCount();
      }
    });
  }
};

const getItemFromLocalStorage = () => {
  const getItem = localStorage.getItem("cartItem");
  if (getItem) {
    let carrt = JSON.parse(getItem);
    updateCartCount();
    return carrt;
  } else {
    return [];
  }
};

const showProductsInCart = () => {
  if (cartResponsive) {
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
                <div class="td_item item_qty">
                <input type='number' class="quantity-input" value="1" data-index="${index}">
                 <!--<select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="more">More</option>
                  </select>-->
                </div>
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

    attachRemoveItemEvent();
  }
};

const updateCartCount = () => {
  if (cartCount) {
    const getCartCount = localStorage.getItem("cartItem");
    const lCartCount = JSON.parse(getCartCount);
    if (lCartCount) {
      cartCount.innerHTML = lCartCount.length;
    }
  }
};

const attachRemoveItemEvent = () => {
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      const filterCart = cart.filter((val, ind) => ind !== index);
      localStorage.setItem("cartItem", JSON.stringify(filterCart));
      cart = filterCart;
      showProductsInCart();
      updateCartCount();
      console.log(filterCart);
    });
  });
};

var cart = getItemFromLocalStorage();
showProductsInCart();
addProducts();
addToCart();
// CRUD localStorage Start
let products = null;
let cart = null;

function productsInit() {
  products = [
    ...OurProducts,
    ...BestSelling,
    ...HealthDevivces,
    ...Medicine,
    ...Merch,
  ];
}

function localStorageInit(key, products) {
  for (let product of products) {
    product.quantity = 1;
  }

  localStorage.setItem(key, JSON.stringify(products));
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
  cart = JSON.parse(localStorage.getItem("cart"));
}

function addItemToCart(productId) {
  if (localStorage.getItem("Products") == null) {
    // 用於手動清除localstorage後，沒有重新載入頁面的情況下初始化。
    productsInit();
    localStorageInit("Products", products);
  }
  products = JSON.parse(localStorage.getItem("Products"));
  let product = products.find((product) => {
    return product.id == productId;
  });

  if (cart.length == 0) {
    product.quantity = 1;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart is empty, push and set item.");
  } else {
    let res = cart.find((element) => element.id == productId);
    if (res === undefined) {
      product.quantity = 1;
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(
        "Cart is no empty, but it does't have this product, so push and set item;"
      );
    } else {
      console.log(
        `Found this prodcut in cart, so update this product quantity, quantity will be ${
          res["quantity"] + 1
        }`
      );
      updateQuantity(productId, res["quantity"] + 1);
    }
  }
}

function removeItemFromCart(productId) {
  let temp = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(temp));
}

function updateQuantity(productId, quantity) {
  quantity = Number(quantity);
  for (let product of cart) {
    if (product.id == productId) {
      product.quantity = quantity;
      console.log(`Update product set quantity ${quantity}`);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getTotal() {
  if (localStorage.getItem("cart") == null) {
    cart = []; // 用於手動清除localstorage後，沒有重新載入頁面的情況下可以顯示cartModal;
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  let temp = cart.map(function (item) {
    return parseFloat(item.price * item.quantity);
  });

  let sum = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  console.log("sum " + sum);
  return sum;
}
// CRUD localStorage End

// Modal Init Start
function setCart() {
  let CartItemList = document.getElementsByClassName("CartItemList")[0];
  let ItemHeadingRow = document.createElement("div");
  let ItemHeadingCell1 = document.createElement("div");
  let ItemHeadingCell2 = document.createElement("div");
  let ItemHeadingCell3 = document.createElement("div");
  let ItemHeadingCell4 = document.createElement("div");

  let ItemAmountRow = document.createElement("div");
  let ItemAmountCell1 = document.createElement("div");
  let ItemAmountCell2 = document.createElement("div");
  let ItemAmountCell3 = document.createElement("div");
  let ItemAmountCell4 = document.createElement("div");

  let ItemCheckoutRow = document.createElement('div');
  let ItemCheckoutCell1 = document.createElement("div");
  let ItemCheckoutCell2 = document.createElement("div");
  let ItemCheckoutCell3 = document.createElement("div");
  let ItemCheckoutCell4 = document.createElement("div");

  CartItemList.innerHTML = null;
  CartItemList.setAttribute("class", "CartItemList");

  ItemHeadingRow.setAttribute("class", "ItemHeadingRow");

  ItemHeadingCell1.setAttribute("class", "ItemHeadingCell");
  ItemHeadingCell1.innerText = "TITLE";

  ItemHeadingCell2.setAttribute("class", "ItemHeadingCell");
  ItemHeadingCell2.innerText = "PRICE";

  ItemHeadingCell3.setAttribute("class", "ItemHeadingCell");
  ItemHeadingCell3.innerText = "QUANTITY";

  ItemHeadingCell4.setAttribute("class", "ItemHeadingCell");
  ItemHeadingCell4.innerText = "TOTAL";

  ItemHeadingRow.append(ItemHeadingCell1);
  ItemHeadingRow.append(ItemHeadingCell2);
  ItemHeadingRow.append(ItemHeadingCell3);
  ItemHeadingRow.append(ItemHeadingCell4);
  CartItemList.append(ItemHeadingRow);

  ItemAmountRow.setAttribute("class", "ItemAmountRow");
  ItemAmountCell1.setAttribute("class", "ItemAmountCell");
  ItemAmountCell1.innerText = "Amount";
  ItemAmountCell2.setAttribute("class", "ItemAmountCell");
  ItemAmountCell3.setAttribute("class", "ItemAmountCell");
  ItemAmountCell4.setAttribute("class", "ItemAmountCell");
  ItemAmountCell4.innerText = getTotal();

  ItemCheckoutRow.setAttribute("class", "ItemCheckoutRow");
  ItemCheckoutCell1.setAttribute("class", "ItemCheckoutCell");
  ItemCheckoutCell2.setAttribute("class", "ItemCheckoutCell");
  ItemCheckoutCell3.setAttribute("class", "ItemCheckoutCell");
  ItemCheckoutCell4.setAttribute("class", "ItemCheckoutCell");

  let a = document.createElement('a', 'href');
  a.href = 'login.html';
  a.setAttribute('id', 'checkout');
  a.innerText= 'Checkout';
  ItemCheckoutCell4.append(a);


  let ItemDataRow = null;
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    cart = []; // 用於手動清除localstorage後，沒有重新載入頁面的情況下可以顯示cartModal;
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  for (const [key, value] of Object.entries(cart)) {
    let ItemDataCell1 = document.createElement("div");
    let ItemDataCell2 = document.createElement("div");
    let ItemDataCell3 = document.createElement("div");
    let ItemDataCell4 = document.createElement("div");
    let inputQuantity = document.createElement("input");

    ItemDataRow = document.createElement("div");
    ItemDataRow.setAttribute("class", `ItemDataRow ItemDataRow-${value["id"]}`);
    ItemDataCell1.setAttribute("class", "ItemDataCell");
    ItemDataCell1.innerText = value["title"];
    ItemDataCell2.setAttribute("class", "ItemDataCell");
    ItemDataCell2.innerText = value["price"];
    ItemDataCell3.setAttribute("class", "ItemDataCell");
    ItemDataCell3.setAttribute("id", `ItemDataCell-${value["id"]}`);
    inputQuantity.setAttribute("type", "number");
    inputQuantity.setAttribute("id", value["id"]);
    inputQuantity.setAttribute("name", "quantity");
    inputQuantity.setAttribute("value", value["quantity"]);
    inputQuantity.setAttribute("min", 0);
    inputQuantity.setAttribute("style", "width:50px");
    inputQuantity.addEventListener("change", (event) => {
      //let thisDataCell = document.getElementById(event.target.parentNode.id);
      let thisDataRow = document.getElementById(
        event.target.parentNode.id
      ).parentElement;

      if (Number(inputQuantity.value) < 1) {
        removeItemFromCart(event.target.id);
        document
          .getElementsByClassName("CartItemList")[0]
          .removeChild(thisDataRow);
      } else {
        updateQuantity(event.target.id, inputQuantity.value);
      }
      ItemDataCell4.innerText = value["price"] * inputQuantity.value;
      ItemAmountCell4.innerText = getTotal();
    });
    ItemDataCell3.append(inputQuantity);
    ItemDataCell4.setAttribute("class", "ItemDataCell");
    ItemDataCell4.innerText = value["price"] * value["quantity"];
    ItemDataRow.append(ItemDataCell1);
    ItemDataRow.append(ItemDataCell2);
    ItemDataRow.append(ItemDataCell3);
    ItemDataRow.append(ItemDataCell4);
    CartItemList.append(ItemDataRow);
  }
  //ItemAmountCell4.innerText = getTotal();
  ItemAmountRow.append(ItemAmountCell1);
  ItemAmountRow.append(ItemAmountCell2);
  ItemAmountRow.append(ItemAmountCell3);
  ItemAmountRow.append(ItemAmountCell4);

  ItemCheckoutRow.append(ItemCheckoutCell1);
  ItemCheckoutRow.append(ItemCheckoutCell2);
  ItemCheckoutRow.append(ItemCheckoutCell3);
  ItemCheckoutRow.append(ItemCheckoutCell4);
  

  CartItemList.append(ItemAmountRow);
  CartItemList.append(ItemCheckoutRow);
}

function cartModalInit() {
  var modal = document.querySelector(".modal");
  var container = modal.querySelector(".container");

  document
    .querySelector(".shopping-cart")
    .addEventListener("click", function (e) {
      setCart();
      modal.classList.remove("hidden");
    });

  document.querySelector(".modal").addEventListener("click", function (e) {
    if (e.target !== modal && e.target !== container) return;
    modal.classList.add("hidden");
  });
}
// Modal Init End

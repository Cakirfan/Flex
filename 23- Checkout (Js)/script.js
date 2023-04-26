//? First Products Variables
const btnPlus1 = document.querySelector("#plus1");
const btnMinus1 = document.querySelector("#minus1");
const btnDelete1 = document.querySelector(".delete1");
let leviStk1 = document.querySelector(".levi-stk1");

//? Second Products Variables
const btnPlus2 = document.querySelector("#plus2");
const btnMinus2 = document.querySelector("#minus2");
const btnDelete2 = document.querySelector(".delete2");
let leviStk2 = document.querySelector(".levi-stk2");

//? Third Products Variables
const btnPlus3 = document.querySelector("#plus3");
const btnMinus3 = document.querySelector("#minus3");
const btnDelete3 = document.querySelector(".delete3");
let leviStk3 = document.querySelector(".levi-stk3");

const bDelete = document.querySelector(".delete");

//? Common Variables
let totalPriceP1 = document.querySelector(".product1-tprice");
let totalPriceP2 = document.querySelector(".product2-tprice");
let totalPriceP3 = document.querySelector(".product3-tprice");

let subTotal = document.querySelector(".subtotal");
let tax = document.querySelector(".tax");
const shipping = document.querySelector(".shipping");
let totalPrice = document.querySelector(".totalprice");

//? ************************ First Product ******************************* //

btnPlus1.onclick = () => {
  leviStk1.textContent++;

  pricePlus1();
};

const pricePlus1 = () => {
  totalPriceP1.textContent = (leviStk1.textContent * 25.99).toFixed(2);
  subTotal.textContent = (
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent)
  ).toFixed(2);
  tax.textContent = (subTotal.textContent * 0.18).toFixed(2);
  totalPrice.textContent = (
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent)
  ).toFixed(2);
};

btnMinus1.onclick = () => {
  leviStk1.textContent--;
  if (leviStk1.textContent < 0) {
    leviStk1.textContent = 0;
  }
  priceMinus1();
};

const priceMinus1 = () => {
  totalPriceP1.textContent = leviStk1.textContent * 25.99;
  subTotal.textContent =
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent);
  tax.textContent = subTotal.textContent * 0.18;
  totalPrice.textContent =
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent);
};

//? ************************ Second Product ******************************* //

btnPlus2.onclick = () => {
  leviStk2.textContent++;

  pricePlus2();
};

const pricePlus2 = () => {
  totalPriceP2.textContent = (leviStk2.textContent * 45.99).toFixed(2);
  subTotal.textContent = (
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent)
  ).toFixed(2);
  tax.textContent = (subTotal.textContent * 0.18).toFixed(2);
  totalPrice.textContent = (
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent)
  ).toFixed(2);
};

btnMinus2.onclick = () => {
  leviStk2.textContent--;
  if (leviStk2.textContent < 0) {
    leviStk2.textContent = 0;
  }
  priceMinus2();
};

const priceMinus2 = () => {
  totalPriceP2.textContent = leviStk2.textContent * 45.99;
  subTotal.textContent = (
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent)
  ).toFixed(2);
  tax.textContent = (subTotal.textContent * 0.18).toFixed(2);
  totalPrice.textContent = (
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent)
  ).toFixed(2);
};

//? ************************ Third Product ******************************* //

btnPlus3.onclick = () => {
  leviStk3.textContent++;

  pricePlus3();
};

const pricePlus3 = () => {
  totalPriceP3.textContent = (leviStk3.textContent * 74.99).toFixed(2);
  subTotal.textContent = (
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent)
  ).toFixed(2);
  tax.textContent = (subTotal.textContent * 0.18).toFixed(2);
  totalPrice.textContent = (
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent)
  ).toFixed(2);
};

btnMinus3.onclick = () => {
  leviStk3.textContent--;
  if (leviStk3.textContent < 0) {
    leviStk3.textContent = 0;
  }
  priceMinus3();
};

const priceMinus3 = () => {
  totalPriceP3.textContent = leviStk3.textContent * 74.99;
  subTotal.textContent = (
    parseFloat(totalPriceP1.textContent) +
    parseFloat(totalPriceP2.textContent) +
    parseFloat(totalPriceP3.textContent)
  ).toFixed(2);
  tax.textContent = (subTotal.textContent * 0.18).toFixed(2);
  totalPrice.textContent = (
    parseFloat(subTotal.textContent) +
    parseFloat(tax.textContent) +
    parseFloat(shipping.textContent)
  ).toFixed(2);
};

document.addEventListener("click", (e) => {
  if (e.target.id == "delete") {
    e.target.closest(".card").remove();
  }
});

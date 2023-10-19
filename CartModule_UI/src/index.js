// import faker from "@faker-js/faker"
import { faker } from "@faker-js/faker";

let cartList = `<div>You have Rahul ${faker.datatype.number(20)} items your cart</div>`;
document.querySelector('#cart-list').innerHTML = cartList;
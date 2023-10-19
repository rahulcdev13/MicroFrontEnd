// import faker from "@faker-js/faker"
import { faker } from "@faker-js/faker";

<<<<<<< HEAD
let cartList = `<div>You have Rahul samat ${faker.datatype.number(20)} items your cart</div>`;
=======
let cartList = `<div>You have Rahul ${faker.datatype.number(20)} items your cart</div>`;
>>>>>>> 41e576f1c9657dd7c7b61a1fddc6c3f57fdf2be6
document.querySelector('#cart-list').innerHTML = cartList;
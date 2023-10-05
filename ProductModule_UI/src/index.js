// import faker from "@faker-js/faker"
import { faker } from "@faker-js/faker";


let productList = '';

for (let i = 0; i < 10; i++) {
    productList += `<div>${faker.commerce.productName()}</div>`   
}
document.querySelector('#product-list').innerHTML = productList;
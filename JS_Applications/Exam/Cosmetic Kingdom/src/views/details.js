import { buyProduct, deleteProduct, getBoughtCount, getProductById } from '../api/products.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (product, isOwner, onDelete, isLogged, buyProd, boughtCount) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${product.imageUrl} alt="example1" />
  <p id="details-title">${product.name}</p>
  <p id="details-category">
    Category: <span id="categories">${product.category}</span>
  </p>
  <p id="details-price">
    Price: <span id="price-number">${product.price}</span>$</p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Bought: <span id="buys">${boughtCount}</span> times.</h4>
      <span>${product.description}</span>
    </div>
  </div>
  <div id="action-buttons">
    ${isOwner? html`<a href="/edit/${product._id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="" id="delete-btn">Delete</a>`
    : isLogged? html`<a @click=${buyProd} href="" id="buy-btn">Buy</a>`: ''}
  </div>
</div>
</section>`;

export async function detailsView(context){
    const productId = context.params.id;
    const product = await getProductById(productId);

    const userData = getUserData();
    const isOwner = userData?.id == product._ownerId;

    const isLogged = userData != undefined;

    const boughtCount = await getBoughtCount(productId);
    context.render(detailsTemplate(product, isOwner, onDelete, isLogged, buyProd, boughtCount));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this product?');
        if(choice){
            await deleteProduct(productId);
            context.page.redirect('/dashboard');
        }
    }

    async function buyProd(){
        await buyProduct(product, userData._id);
        document.getElementById('buy-btn').style.display = 'none';
    }
}
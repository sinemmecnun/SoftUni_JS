import { getAllProducts } from '../api/products.js';
import { html } from '../lib.js';


const catalogueTemplate = (products) => html`
<h2>Products</h2>
  <section id="dashboard">
    ${products.length == 0? html`<h2>No products yet.</h2>` 
    : products.map(productCard)}
  </section>`;

const productCard = (product) => html`
<div class="product">
    <img src=${product.imageUrl} alt="example1" />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
    <a class="details-btn" href="/dashboard/${product._id}">Details</a>
</div>
`;

export async function catalogueView(context){
    const products = await getAllProducts();

    context.render(catalogueTemplate(products));
}
import { getShoeByBrand } from '../api/shoes.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const resultsTemplate = (shoes, brand, onSubmit, isLogged) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
    <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
        .value=${brand}
    />
    <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    <div id="search-container">
    <ul class="card-wrapper">
        ${shoes.length == 0? html`<h2>There are no results found.</h2>`
        : isLogged? shoes.map(shoeLoggedCard): shoes.map(shoeGuestCard)}
    </ul>
</div>
</section>`;

const shoeGuestCard = (shoe) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong>
        <span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
</li>`;

const shoeLoggedCard = (shoe) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong>
        <span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/dashboard/${shoe._id}">Details</a>
</li>`;


export async function resultsView(context){
    const brand = context.params.brand;
    const userData = await getUserData();
    const isLogged = userData != undefined;

    const shoes = await getShoeByBrand(brand);
    context.render(resultsTemplate(shoes, brand, onSubmit, isLogged));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const brand = formData.get('search');

        if(brand == ''){
            return alert('All fields are required!');
        }

        const shoes = await getShoeByBrand(brand);
        context.render(resultsTemplate(shoes, brand, isLogged));
    }
}
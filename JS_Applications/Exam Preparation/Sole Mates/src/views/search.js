import { getShoeByBrand } from '../api/shoes.js';
import { html } from '../lib.js';

const searchTemplate = (onSubmit) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
    <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
    />
    <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    
</section>
`;


export async function searchView(context){
    context.render(searchTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const brand = formData.get('search');

        if(brand == ''){
            return alert('All fields are required!');
        }

        const shoes = await getShoeByBrand(brand);
        context.page.redirect(`/search/${brand}`);
    }
}
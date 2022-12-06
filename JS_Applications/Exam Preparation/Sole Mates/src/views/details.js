import { deleteShoe, getShoeById } from '../api/shoes.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (shoe, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
        <img src=${shoe.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
        <p>
        Model: <span id="details-model">${shoe.model}</span>
        </p>
        <p>Release date: <span id="details-release">${shoe.release}</span></p>
        <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
        <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    ${isOwner? html`<div id="action-buttons">
    <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="" id="delete-btn">Delete</a></div>`
    :''}
    </div>
</section>`;

export async function detailsView(context){
    const shoeId = context.params.id;
    const shoe = await getShoeById(shoeId);

    const userData = getUserData();
    const isOwner = userData?.id == shoe._ownerId;
    context.render(detailsTemplate(shoe, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this shoe?');
        if(choice){
            await deleteShoe(shoeId);
            context.page.redirect('/dashboard');
        }
    }
}
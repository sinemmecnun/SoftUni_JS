import { apply, deleteOffer, getApplicationCount, getApplicationsByUser, getOfferById } from '../api/jobs.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (offer, isOwner, onDelete, isLogged, onApply, applicationsCount) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">${applicationsCount}</strong></p>
      <div id="action-buttons">
        ${isOwner? html`<a href="/edit/${offer._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="" id="delete-btn">Delete</a>` :
         isLogged? html`<a @click=${onApply} href="" id="apply-btn">Apply</a>`: ''}
      </div>
    </div>
  </section>`;

export async function detailsView(context){
    const offerId = context.params.id;
    const offer = await getOfferById(offerId);

    const userData = getUserData();
    const isOwner = userData?.id == offer._ownerId;
    const isLogged = userData != undefined;

    const applicationsCount = await getApplicationCount(offerId);
    context.render(detailsTemplate(offer, isOwner, onDelete, isLogged, onApply, applicationsCount));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this offer?');
        if(choice){
            await deleteOffer(offerId);
            context.page.redirect('/dashboard');
        }
    }

    async function onApply(){
        await apply(offerId, userData._id);
        document.getElementById('apply-btn').style.display = 'none';
        // if(isOwner){
        //     const applicationsCount = await getApplicationCount(offerId);
        //     document.getElementById('applications').textContent = applicationsCount;
        // }
        // else{
        //     const applicationsCount = await getApplicationsByUser(offerId, userData._id);
        //     document.getElementById('applications').textContent = applicationsCount;
        // }
    }
}
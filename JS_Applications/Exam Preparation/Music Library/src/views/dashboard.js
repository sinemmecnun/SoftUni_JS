import { getAllAlbums } from '../api/albums.js';
import { html } from '../lib.js';


const dashboardTemplate = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${albums.length == 0 ? html`<h2>There are no albums added yet.</h2>`
    : albums.map(albumCard)}
    </ul>
</section>`;

const albumCard = (album) => html`
<li class="card">
    <img src=${album.imageUrl} alt="" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/dashboard/${album._id}">Details</a>
</li>
`;

export async function dashboardView(context){
    const albums = await getAllAlbums();

    context.render(dashboardTemplate(albums));
}
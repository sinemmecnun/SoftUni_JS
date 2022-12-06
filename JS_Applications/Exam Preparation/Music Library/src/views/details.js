import { deleteAlbum, getAlbumById, getAlbumLikes, increaseLikes } from '../api/albums.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (album, isOwner, onDelete, isLogged, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
        <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
        <p>
            <strong>Album name:</strong><span id="details-album">${album.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        
        <div id="likes">Likes: <span id="likes-count">0</span></div>
        <div id="action-buttons">
        ${isOwner
            ?html`<a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="" id="delete-btn">Delete</a>`
            : isLogged? html`<a @click=${onLike} href="" id="like-btn">Like</a>` : ''}
        </div>
    </div>
</section>`;

export async function detailsView(context){
    const albumId = context.params.id;
    const userData = getUserData();
    const album = await getAlbumById(albumId);

    const isOwner = userData?.id == album._ownerId;
    const isLogged = userData != undefined;
    context.render(detailsTemplate(album, isOwner, onDelete, isLogged, onLike));
    document.getElementById('likes').style.display = 'none';
    
    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this album?');
        if(choice){
            await deleteAlbum(albumId);
            context.page.redirect('/dashboard');
        }
    }

    async function onLike(){
        await increaseLikes(albumId);
        const likeBtn = document.getElementById('like-btn');
        likeBtn.style.display = 'none';

        const likesCount = await getAlbumLikes(albumId);

        const container = document.getElementById('action-buttons');
        container.innerHTML = `<div id="likes">Likes: <span id="likes-count">${likesCount}</span></div> `;

        
    }
}
import { html } from '../lib.js';
import { getMemesByUser } from '../api/memes.js';
import { getUserData } from '../util.js';

const profileTemplate = (memes, userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length == 0
            ?html`<p class="no-memes">No memes in database.</p>`
            : memes.map(memeCard)}
    </div>
</section>`;

const memeCard = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/memes/${meme._id}">Details</a>
        </div>
    </div>
</div>`;

export async function profileView(context){
    const userData = getUserData();

    const memes = await getMemesByUser(userData.id);

    context.render(profileTemplate(memes, userData));
}
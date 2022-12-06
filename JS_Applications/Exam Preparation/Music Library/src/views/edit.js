import { getAlbumById, updateAlbum } from '../api/albums.js';
import { html } from '../lib.js';


const editTemplate = (onSubmit, album) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} >
        <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album}>
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl}>
        <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release}>
        <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label}>
        <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales}>

        <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editView(context){
    const albumId = context.params.id;
    const album = await getAlbumById(albumId); 
    context.render(editTemplate(onSubmit, album));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const album = {
            singer: formData.get('singer'),
            album: formData.get('album'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            label: formData.get('label'),
            sales: formData.get('sales')
        };

        if(album.singer == '' || album.album == '' || album.imageUrl == '' 
        || album.release == '' || album.label == '' || album.sales == ''){
            return alert('All fields are required!');
        }

        await updateAlbum(albumId, album);
        event.target.reset();
        context.page.redirect('/dashboard/'+ albumId);
    }
}
import { getBookById, deleteBook, getBookLikes } from '../api/books.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (book, isOwner,  bookLikes, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${isOwner
                ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="#">Delete</a>` 
            : html`<a id="heartBtn" class="button" href="#">Like</a>`}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${bookLikes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function detailsView(context){
    const bookId = context.params.bookId;
    const book = await getBookById(bookId);

    const userData = getUserData();
    const isOwner = userData?.id == book._ownerId;

    const bookLikes = await getBookLikes(bookId);
    
    context.render(detailsTemplate(book, isOwner, bookLikes, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this book?');
        if(choice){
            deleteBook(bookId);
            context.page.redirect('/');
        }
    }
}
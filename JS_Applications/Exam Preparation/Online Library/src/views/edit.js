import { html } from '../lib.js';
import { getBookById, updateBook } from '../api/books.js';

const editTemplate = (onSubmit, book) => html`
<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description" .value=${book.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${book.type}>
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`;

export async function editView(context){
    const bookId = context.params.id;
    const book = await getBookById(bookId);
    console.log(context.params);
    context.render(editTemplate(onSubmit, book));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const book = {
            title: formData.get('title'), 
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            type: formData.get('type'),
        }

        if(book.title == '' || book.description == '' || book.imageUrl == '' || book.type == ''){
            return alert('All fields are required!');
        }

        await updateBook(bookId, book);
        event.target.reset();
        context.page.redirect('/books/'+ bookId);
    }
}
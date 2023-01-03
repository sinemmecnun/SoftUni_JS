import { getProductById, updateProduct } from '../api/products.js';
import { html } from '../lib.js';


const editTemplate = (onSubmit, product) => html`
<section id="edit">
    <div class="form">
      <h2>Edit Product</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          .value=${product.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="product-image"
          placeholder="Product Image"
          .value=${product.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="product-category"
          placeholder="Category"
          .value=${product.category}
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${product.description}></textarea>
        
        <input
          type="text"
          name="price"
          id="product-price"
          placeholder="Price"
          .value=${product.price}
        />
        <button type="submit">post</button>
      </form>
    </div>
</section>
`;

export async function editView(context){
    const productId = context.params.id;
    const product = await getProductById(productId)
    context.render(editTemplate(onSubmit, product));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const product = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'), 
            category: formData.get('category'), 
            description: formData.get('description'), 
            price: formData.get('price')
        };
        
        if(product.name == '' || product.imageUrl == '' 
        || product.category == '' || product.description == '' || product.price == ''){
            return alert('All fields are required!');
        }

        await updateProduct(productId, product);
        event.target.reset();
        context.page.redirect('/dashboard/'+ productId);
    }
}
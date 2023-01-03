import { createProduct } from '../api/products.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
<section id="create">
<div class="form">
  <h2>Add Product</h2>
  <form @submit=${onSubmit} class="create-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Product Name"
    />
    <input
      type="text"
      name="imageUrl"
      id="product-image"
      placeholder="Product Image"
    />
    <input
      type="text"
      name="category"
      id="product-category"
      placeholder="Category"
    />
    <textarea
      id="product-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
    ></textarea>
    
    <input
      type="text"
      name="price"
      id="product-price"
      placeholder="Price"
    />

    <button type="submit">Add</button>
  </form>
</div>
</section>
`;

export function createView(context){
    context.render(createTemplate(onSubmit));

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
        
        await createProduct(product);
        event.target.reset();
        context.page.redirect('/dashboard');
    }
}
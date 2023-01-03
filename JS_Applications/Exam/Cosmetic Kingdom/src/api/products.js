import { del, get, post, put } from './api.js';

export async function getAllProducts(){
    return get('/data/products?sortBy=_createdOn%20desc');
}

export async function createProduct(product){
    return post('/data/products', product);
}

export async function getProductById(id){
    return get('/data/products/' + id);
}

export async function deleteProduct(id){
    return del('/data/products/' + id);
}

export async function updateProduct(id, product){
    return put('/data/products/' + id, product);
}

export async function buyProduct(productId, userId){
    return post('/data/bought', {productId, userId});
}

export async function getBoughtCount(productId){
    return get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}


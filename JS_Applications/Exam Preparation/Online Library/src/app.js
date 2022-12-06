import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { createView } from './views/add.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { profileView } from './views/myBooks.js';
import { registerView } from './views/register.js';


const main = document.getElementById('site-content');

page(decorateContext);
page('/', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/books/:bookId', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/myBooks', profileView);

updateNav();
page.start();

document.getElementById('logoutBtn').addEventListener('click', onLogout);

function decorateContext(context, next){
    context.render = renderMain;
    context.updateNav = updateNav;
    next();
}

function renderMain(templateResult){
    render(templateResult, main);
}

function updateNav(){
    const userData = getUserData();
    if(userData){
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}
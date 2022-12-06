import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogueView } from './views/catalogue.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/memes', catalogueView);
page('/login', loginView);
page('/register', registerView);
page('/memes/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/profile', profileView);

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
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}
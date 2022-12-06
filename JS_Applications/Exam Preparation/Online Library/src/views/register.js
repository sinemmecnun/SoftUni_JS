import {html} from '../lib.js';
import {register} from '../api/users.js'

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;

export function registerView(context){
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repassword = formData.get('confirm-pass').trim();
        
        if(email == '' || password == '' || repassword == ''){
            return alert('All fields are required!');
        }
        if(repassword != password){
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        context.updateNav();
        context.page.redirect('/');
    }
}
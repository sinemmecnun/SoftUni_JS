import {html} from '../lib.js';
import {register} from '../api/users.js'

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
</section>
`;

export function registerView(context){
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repassword = formData.get('re-password').trim();
        
        if( email == '' || password == '' || repassword == ''){
            return alert('All fields are required!');
        }
        if(repassword != password){
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        context.updateNav();
        context.page.redirect('/dashboard');
    }
}
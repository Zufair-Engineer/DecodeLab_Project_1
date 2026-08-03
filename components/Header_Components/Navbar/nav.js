import { updateButton } from "../../../script.js";

export function navHamburgerUI(){
    const container = document.createElement('aside');
    container.classList = "aside_container";
    container.innerHTML = `
    <ul class="ui_links">
        <li class="links">
            <a href="#home" class="list_content">Home</a>
        </li>
        <li class="links">
            <a href="#about" class="list_content">About</a>
        </li>
        <li class="links">
            <a href="#services" class="list_content">Services</a>
        </li>
        <li class="links">
            <a href="#blog" class="list_content">Blogs</a>
        </li>
        <li class="links">
            <a href="#contact" class="list_content">Contact Us</a>
        </li>
    </ul>
    `
    document.querySelector('body').append(container);
}

// Register UI

export function registerUI(){
    const registerContainer = document.createElement('div');
    registerContainer.classList = "register_container";

    registerContainer.innerHTML = `
    
    <h1>Register Now</h1>
    <form class="register_form">
        <label for="email" class="inputField">
            <h4>Email</h4>
            <input type="email" id="email" placeholder="Enter Your Email" />
        </label>
        <label for="pass" class="inputField">
            <h4>Password</h4>
            <input type="password" id="pass" placeholder="Enter Your Password" />
        </label>
        <button class="register_btn">Sign Up</button>
    </form>
    `
    document.body.append(registerContainer);
}

// sotorage feature

export function Set_Information_Localstorage(){
    const register_form = document.querySelector('.register_form');
    register_form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const username = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        let user = {
            username,
            password
        }
        localStorage.setItem("user",JSON.stringify(user));
        updateButton();
        alert("User Register Successfully...");
        document.querySelector('.register_container').remove();
    })
}

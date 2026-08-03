import { navHamburgerUI, registerUI, Set_Information_Localstorage } from "./components/Header_Components/Navbar/nav.js";

const components = [
    ['navbar' , './components/Header_Components/Navbar/navbar.html'],
    ['hero' , './components/Header_Components/Hero_section/hero.html'],
    ['about' , './components/Main_Container_Components/About_section/about.html']
]

// Load Component Feature
async function loadComponents (id , path){
    try {
        const response = await fetch(path);
        if(!response.ok){
            throw new Error(`Cannot Load path ${path}`);
        }
        document.getElementById(id).innerHTML = await response.text();
        if(id === "navbar"){
            hamberFeature();
            signUpFeature();
        }
        console.log("Load Successfully")
    } catch (error) {
        console.log(error);
    }
}

// Load Components
components.forEach((component)=>{
    loadComponents(...component);
})


// Hamberger Feature In Mobile
let isMenueOpen = false;
function hamberFeature(){
    const hamburger = document.getElementById("hamburger")
    console.log("hi I am Hambergur")
    if(!hamburger){
        console.log("Hamburger Not Found....");
    }
    hamburger.addEventListener('click', () => {
        if(!isMenueOpen){
            navHamburgerUI();
            isMenueOpen = true;
        }else{
            document.querySelector('.aside_container').remove();
            isMenueOpen = false;
        }
    })
}

// Register Feature
let isRegisterShow = false;
function signUpFeature(){
    const navBtn = document.querySelector('.nav_btn');
    updateButton();
    
    navBtn.addEventListener('click',()=>{
        
        // Already Login
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
            alert("User Logout Successfully...");
            updateButton();
            return;
        }

        // Register User
        if(!isRegisterShow && navBtn.textContent == "Get Started"){
            registerUI();
            Set_Information_Localstorage();    
            isRegisterShow = true;
        }else{
            document.querySelector('.register_container').remove();
            isRegisterShow = false;
        }
    })
}

// Update the Text Of Button
export function updateButton(){
    const navBtn = document.querySelector('.nav_btn');
    navBtn.textContent = localStorage.getItem("user") 
            ? "Log Out"
            : "Get Started";
}

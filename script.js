import { navHamburgerUI, registerUI, Set_Information_Localstorage } from "./components/Header_Components/Navbar/nav.js";


const components = [
    ['hero' , './components/Header_Components/Hero_section/hero.html'],
    ['navbar' , './components/Header_Components/Navbar/navbar.html'],
    ['about' , './components/Main_Container_Components/About_section/about.html'],
    ['services' ,'./components/Main_Container_Components/Services_section/services.html' ],
    ['blog' , './components/Main_Container_Components/Blog_section/blog.html'],
    ['contact' , './components/Main_Container_Components/Contact_section/contact.html'],
    ['footer' , './components/Footer_Components/footer.html']
]


// Load Component Feature
async function loadComponents (id , path){
    try {
        const response = await fetch(path);
        if(!response.ok){
            throw new Error(`Cannot Load path ${path}`);
        }
        document.getElementById(id).innerHTML = await response.text();
        if(id === "navbar" && "hero"){
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
    const navBtn = document.querySelectorAll('.nav_btn');
    console.log("btn_length : ",navBtn.length);
    updateButton();
    
    navBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
        
        // Already Login
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
            alert("User Logout Successfully...");
            updateButton();
            return;
        }

        // Register User
        if(!isRegisterShow && btn.textContent == "Get Started"){
            
            registerUI();
            Set_Information_Localstorage();    
            isRegisterShow = true;
        }else{
            document.querySelector('.register_container').remove();
            isRegisterShow = false;
        }
    })
    })
}

// Update the Text Of Button
export function updateButton(){
    const navBtn = document.querySelectorAll('.nav_btn');
    navBtn.forEach((btn)=>{
        btn.textContent = localStorage.getItem("user") 
            ? "Log Out"
            : "Get Started";
    })
}

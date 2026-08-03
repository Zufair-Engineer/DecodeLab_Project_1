const components = [
    ['navbar' , './components/Header_Components/Navbar/navbar.html'],
    ['hero' , './components/Header_Components/Hero_section/hero.html'],
    ['about' , './components/Main_Container_Components/About_section/about.html']
]

async function loadComponents (id , path){
    try {
        const response = await fetch(path);
        if(!response.ok){
            throw new Error(`Cannot Load path ${path}`);
        }
        document.getElementById(id).innerHTML = await response.text();
        console.log("Load Successfully")
    } catch (error) {
        console.log(error);
    }
}

components.forEach((component)=>{
    loadComponents(...component);
})
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.2
});

document.querySelectorAll(
".content_left,.content_middle,.content_right,.testimonial_section"
).forEach(el=>{
    el.classList.add("about_animation");
    observer.observe(el);
});
let menu_item = document.querySelector("#menu-item")
let talk_item = document.querySelector("#talk-item")
let hero_video_container = document.querySelector(".cursor-follower-video-container")
let hero_container =  document.querySelector(".hero-container")
let dark_item = document.querySelector("#dark-mode-item")
let menubar_overlay_container = document.querySelector(".menubar-overlay-container")

let isDark = false;


menu_item.addEventListener("mouseenter",() => {
    let isMenubarOpen = menubar_overlay_container.classList.contains("show")
    menu_item.textContent = isMenubarOpen ? "CLOSE" : "OPEN"
})

menu_item.addEventListener("mouseleave",() => {
    let isMenubarOpen = menubar_overlay_container.classList.contains("show")
    menu_item.textContent = isMenubarOpen ? "MENU" : "CLOSE"
})

menu_item.addEventListener("click", () => {

    menubar_overlay_container.classList.toggle("show");
    const isOpen = menubar_overlay_container.classList.contains("show");

    document.body.classList.toggle("menu-open", isOpen);
    menu_item.textContent = isOpen ? "CLOSE" : "MENU";
});



talk_item.addEventListener("mouseenter",() => {
    talk_item.textContent = "CONTACT US"
})

talk_item.addEventListener("mouseleave",() => {
    talk_item.textContent = "LET'S TALK"
})


document.addEventListener("mousemove", (e) => {
    // cursor follower logic
    hero_video_container.style.top= `${e.clientY}px`
    hero_video_container.style.left=`${e.clientX}px`
    hero_video_container.style.display = "block"
})

hero_container.addEventListener("mouseenter", (e) => {
    hero_video_container.style.opacity="1" 
})

hero_container.addEventListener("mouseleave", (e) => {
    // cursor follower logic
    hero_video_container.style.opacity="0" 
})


//DARK MODE LOGIC
dark_item.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.add("dark")
    
    if(isDark){
        dark_item.innerHTML = "LIGHT MODE"
    }else{
        document.body.classList.remove("dark")
        dark_item.innerHTML = "DARK MODE"
    }

})


// menubar items mouse hover animation
let menubar_items =  document.querySelectorAll(".menubar_items")

menubar_items.forEach((menubarItem) =>{

    //mouse enter listener logic
    menubarItem.addEventListener("mouseenter", () =>{4
        menubarItem.style.transform = "translateX(50px)"
        // targeting the img tag
        let img = menubarItem.parentElement.querySelector("img")
        img.style.width = "100px"
    })

    //mouse leave listener logic
    menubarItem.addEventListener("mouseleave", () =>{4
        menubarItem.style.transform = "translateX(0)"
        let img = menubarItem.parentElement.querySelector("img")
        img.style.width = "0px"
    })
})


// update time

function updateTime(){
    let now = new Date();
    let current_time = document.querySelector("#current_time")

    current_time.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

}


setInterval(()=>{
    updateTime()
}, 1000)



// image stack effect

const triggers = document.querySelectorAll(".hover-trigger");

triggers.forEach(trigger => {

    const images = trigger.querySelectorAll(".stack-image");

    let index = 0;
    let zIndex = 10;
    let interval = null;

    trigger.addEventListener("mouseenter", () => {

        if (interval) return;

        interval = setInterval(() => {

            const image = images[index];

            image.style.opacity = "1";
            image.style.zIndex = zIndex++;

            index++;

            if (index === images.length) {
                index = 0;
            }

        }, 300);
    });

    trigger.addEventListener("mouseleave", () => {

        clearInterval(interval);
        interval = null;

        images.forEach(image => {
            image.style.opacity = "0";
            image.style.zIndex = "1";
        });

        index = 0;
        zIndex = 10;
    });

});


// playground section

let playground_section =  document.querySelector(".playground-section")
let playground_text =  document.querySelector(".playground-text")
let portfolio =  document.querySelector("#portfolio")

playground_text.addEventListener("mousemove",(e) =>{
    portfolio.style.top = `${e.clientY}px`
    portfolio.style.left = `${e.clientX}px`
    portfolio.style.opacity = "1"
})

playground_text.addEventListener("mouseleave",(e) =>{
    portfolio.style.top = `${e.clientY}px`
    portfolio.style.left = `${e.clientX}px`
    portfolio.style.opacity = "0"
})



// service section

let service_items = document.querySelectorAll(".service-items")
let service_img = document.querySelector("#service-img")
let description_text =  document.querySelector(".description-text")

service_items.forEach(item => {

    item.addEventListener("mouseenter", () => {

        service_img.src = item.dataset.image;
        description_text.textContent = item.dataset.description;

        const top = item.offsetTop;

        service_img.parentElement.style.top = `${top}px`;
        description_text.parentElement.style.top = `${top}px`;

        service_img.classList.add("show");
        description_text.classList.add("show");
    });

    item.addEventListener("mouseleave", () => {
        service_img.classList.remove("show");
        description_text.classList.remove("show");
    });

});

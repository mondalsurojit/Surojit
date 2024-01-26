var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    lazy: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper2, .mySwiper3", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});



// window.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         document.querySelector("#preloader").style.transform = "translate(0, -105vh)";
//         console.log("loaded");
//     }, 3000);
// });



// let lastScrollTop = 0;

// window.addEventListener("scroll", () => {
//     let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         document.querySelector("header").style.transform = "translate(0, -100%)";
//     } else {
//         // Scrolling up
//         document.querySelector("header").style.transform = "translate(0, 0)";
//     }

//     lastScrollTop = currentScrollTop;
// });



let nav = document.querySelector(".nav");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let xIcon = document.querySelector(".x-icon");
let main = document.querySelector("main");
let navElements = Array.from(document.querySelectorAll(".nav li a"));

document.querySelectorAll("header button").forEach((element) => {
    element.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        hamburgerIcon.classList.toggle("icon-hide");
        xIcon.classList.toggle("icon-show");
        main.classList.toggle("dark-bg");

        document.querySelector("main").addEventListener("click", () => {
            nav.classList.remove("nav-active");
            hamburgerIcon.classList.remove("icon-hide");
            xIcon.classList.remove("icon-show");
            main.classList.remove("dark-bg");
        });

        navElements.forEach((element) => {
            element.addEventListener("click", () => {
                setTimeout(() => {
                    nav.classList.remove("nav-active");
                    hamburgerIcon.classList.remove("icon-hide");
                    xIcon.classList.remove("icon-show");
                    main.classList.remove("dark-bg");
                }, 1500);
            });
        });

    });
});



let scrollMore = document.getElementById("scroll-more");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    scrollMore.classList.toggle("scroll-more-before", scrollPosition <= 50);
    scrollMore.classList.toggle("scroll-more-after", scrollPosition > 50);
    navElements[0].classList.toggle("active-section", scrollPosition > 810 && scrollPosition <= 1425);
    navElements[1].classList.toggle("active-section", scrollPosition > 1425 && scrollPosition <= 2040);
    navElements[2].classList.toggle("active-section", scrollPosition > 2040 && scrollPosition <= 2654);
    navElements[3].classList.toggle("active-section", scrollPosition > 2654 && scrollPosition <= 3290);
    navElements[4].classList.toggle("active-section", scrollPosition > 3290);
});



let html = document.querySelector("html");
let profileStory = document.querySelector("#profile-story");
let dialogBg = document.querySelector(".dialog-bg");

document.querySelector(".profile-photo").addEventListener("click", () => {
    profileStory.show();
    dialogBg.style.display = "block";

    document.querySelector("#profile-story button").addEventListener("click", () => {
        profileStory.close();
        dialogBg.style.display = "none";
    });

    dialogBg.addEventListener("click", () => {
        profileStory.close();
        dialogBg.style.display = "none";
    });
});


let seeMyResume = document.querySelector("#see-my-resume");
let resumeContainer = document.querySelector("#resume-container");

document.querySelector("#see-my-resume").addEventListener("click", () => {
    resumeContainer.show();
    dialogBg.style.display = "block";

    document.querySelector("#resume-container button").addEventListener("click", () => {
        resumeContainer.close();
        dialogBg.style.display = "none";
    });

    dialogBg.addEventListener("click", () => {
        resumeContainer.close();
        dialogBg.style.display = "none";
    });
});

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
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: true,
    // },
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




window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector("#preloader").style.transform = "translate(0, -105vh)";
        console.log("loaded");
    }, 8500);
});




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

function throttle(func, delay) {
    let flag = true;
    return function () {
        // let args = arguments;
        // let context = this;
        if (flag == true) {
            // func.apply(args, context);
            func();
            flag = false;
            setTimeout(() => { flag = true; }, delay);
        }
    };
}

function handleScroll() {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    scrollMore.classList.toggle("scroll-more-before", scrollPosition <= 50);
    scrollMore.classList.toggle("scroll-more-after", scrollPosition > 50);
    navElements[0].classList.toggle("active-section", scrollPosition > 810 && scrollPosition <= 1425);
    navElements[1].classList.toggle("active-section", scrollPosition > 1425 && scrollPosition <= 2040);
    navElements[2].classList.toggle("active-section", scrollPosition > 2040 && scrollPosition <= 2654);
    navElements[3].classList.toggle("active-section", scrollPosition > 2654 && scrollPosition <= 3290);
    navElements[4].classList.toggle("active-section", scrollPosition > 3290);
}

const throttledScrollHandler = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledScrollHandler);




let html = document.querySelector("html");
let profileStory = document.querySelector("#profile-story");
let dialogBg = document.querySelector(".dialog-bg");

document.querySelector(".profile-photo").addEventListener("click", () => {
    profileStory.show();
    dialogBg.style.display = "block";

    document.querySelector("#profile-story button").addEventListener("click", closeProfileStory);

    dialogBg.addEventListener("click", closeProfileStory);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProfileStory();
        }
    });

    function closeProfileStory() {
        profileStory.close();
        dialogBg.style.display = "none";
    }
});




let seeMyResume = document.querySelector("#see-my-resume");
let resumeContainer = document.querySelector("#resume-container");

seeMyResume.addEventListener("click", () => {
    resumeContainer.show();
    dialogBg.style.display = "block";

    document.querySelector("#resume-container button").addEventListener("click", closeResumeContainer);

    dialogBg.addEventListener("click", closeResumeContainer);

    // Create an invisible input field
    let invisibleInput = document.createElement("input");
    Object.assign(invisibleInput.style, {
        opacity: 0,
        position: "absolute",
        top: "-100px",
    });
    document.body.appendChild(invisibleInput);

    // Set focus on the invisible input
    invisibleInput.focus();

    // Listen for keydown events on the invisible input
    invisibleInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeResumeContainer();
        }
    });

    function closeResumeContainer() {
        resumeContainer.close();
        dialogBg.style.display = "none";
        // Remove the invisible input from the DOM
        document.body.removeChild(invisibleInput);
    }
});




let photoProps = Array.from(document.querySelectorAll(".photo-prop"));
let photosDialog = document.querySelector("#photos-dialog");

photoProps.forEach(photoProp => {
    photoProp.addEventListener("click", () => {
        let styles = window.getComputedStyle(photoProp);
        let backgroundImage = styles.getPropertyValue('background-image');
        photosDialog.show();
        dialogBg.style.display = "block";
        photosDialog.style.backgroundImage = backgroundImage;

        document.querySelector("#photos-dialog button").addEventListener("click", closePhotosDialog);

        dialogBg.addEventListener("click", closePhotosDialog);

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closePhotosDialog();
            }
        });

        function closePhotosDialog() {
            photosDialog.close();
            dialogBg.style.display = "none";
        }
    });
});


// let cursor = document.querySelector("#cursor");
// document.addEventListener("mouseout", (e) => {
//     cursor.style.display = "none";
// });
// document.addEventListener("mousemove", (e) => {
//     cursor.setAttribute("style", `left: ${e.pageX - 15}px; top: ${e.pageY - 15}px;`);
// });




let paths = document.querySelectorAll("svg path");
paths.forEach((path, index) => {
    path.style.strokeDasharray = path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();
    path.style.animation = `line-anim 2s ease forwards ${index / 4}s`;
});




let experienceSlider = document.querySelector('#experience-slider');
let rightScroll = document.querySelector('#right-scroll');
let leftScroll = document.querySelector('#left-scroll');
let scrollWidth = experienceSlider.scrollWidth;
let scrollableDistance = scrollWidth - experienceSlider.clientWidth;
let scrollTo = (scrollableDistance * 100) / 100;

let slides = Array.from(document.querySelectorAll("#experience-slider div"));

rightScroll.addEventListener('click', () => {
    experienceSlider.scrollLeft = experienceSlider.scrollLeft + scrollTo;
});

leftScroll.addEventListener('click', () => {
    experienceSlider.scrollLeft = experienceSlider.scrollLeft - scrollTo;
});

// experienceSlider.addEventListener('scroll', () => {
//     if (experienceSlider.scrollLeft > 0 ) {
//         rightScroll.style.display = "grid";
//         leftScroll.style.display = "none";
//         console.log(experienceSlider.scrollLeft);
//     }
//     else if (experienceSlider.scrollLeft + experienceSlider.clientWidth >= experienceSlider.scrollWidth) {
//         rightScroll.style.display = "none";
//         leftScroll.style.display = "grid";
//         console.log("Reached the end");
//     }
//     else {
//         leftScroll.style.display = "grid";
//         rightScroll.style.display = "grid";
//     }
// });




let experienceSlides = Array.from(document.querySelectorAll(".experience-slide"));
let companyImgs = Array.from(document.querySelectorAll(".company-img"));
let activeSlideIndex = 1;
let companyNames = Array.from(document.querySelectorAll(".company-name"));

companyImgs[1].classList.add("experience-slide-on-click");
companyNames[1].style.transform = "translate(-50%, 100%)";

experienceSlides.forEach((experienceSlide, index) => {
    let companyImg = companyImgs[index];
    experienceSlide.style.cursor = "pointer";

    experienceSlide.addEventListener("mouseenter", () => {
        companyImg.classList.add("experience-slide-on-click");
    });

    experienceSlide.addEventListener("mouseleave", () => {
        if (activeSlideIndex !== index) {
            companyImg.classList.remove("experience-slide-on-click");
        }
    });

    experienceSlide.addEventListener("click", () => {
        companyImgs[activeSlideIndex].classList.remove("experience-slide-on-click");
        companyNames[activeSlideIndex].style.transform = "translate(-50%, 0)";

        companyImg.classList.add("experience-slide-on-click");
        companyNames[index].style.transform = "translate(-50%, 100%)";
        activeSlideIndex = index;
    });
});

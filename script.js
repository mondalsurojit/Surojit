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




let html = document.querySelector("html");
let profileStory = document.querySelector("#profile-story");
let dialogBg = document.querySelector(".dialog-bg");

document.querySelector(".profile-photo").addEventListener("click", () => {
    profileStory.show();
    dialogBg.classList.add("dialog-bg-visible");

    document.querySelector("#profile-story button").addEventListener("click", closeProfileStory);

    dialogBg.addEventListener("click", closeProfileStory);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProfileStory();
        }
    });

    function closeProfileStory() {
        profileStory.close();
        dialogBg.classList.remove("dialog-bg-visible");
    }
});




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
        dialogBg.classList.toggle("dialog-bg-visible");

        document.querySelector("main").addEventListener("click", () => {
            nav.classList.remove("nav-active");
            hamburgerIcon.classList.remove("icon-hide");
            xIcon.classList.remove("icon-show");
            main.classList.remove("dark-bg");
            dialogBg.classList.remove("dialog-bg-visible");
        });

        navElements.forEach((element) => {
            element.addEventListener("click", () => {
                setTimeout(() => {
                    nav.classList.remove("nav-active");
                    hamburgerIcon.classList.remove("icon-hide");
                    xIcon.classList.remove("icon-show");
                    main.classList.remove("dark-bg");
                    dialogBg.classList.remove("dialog-bg-visible");
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
    scrollMore.classList.toggle("scroll-more-before", scrollPosition <= 200);
    scrollMore.classList.toggle("scroll-more-after", scrollPosition > 200);
    navElements[0].classList.toggle("active-section", scrollPosition > 810 && scrollPosition <= 1425);
    navElements[1].classList.toggle("active-section", scrollPosition > 1425 && scrollPosition <= 2040);
    navElements[2].classList.toggle("active-section", scrollPosition > 2040 && scrollPosition <= 2654);
    navElements[3].classList.toggle("active-section", scrollPosition > 2654 && scrollPosition <= 3290);
    navElements[4].classList.toggle("active-section", scrollPosition > 3290);
}

const throttledScrollHandler = throttle(handleScroll, 75);

window.addEventListener("scroll", throttledScrollHandler);




let aboutMe = document.querySelector("#about-me");

aboutMe.addEventListener("click", () => {
    alert("Blog about me would be added very soon!");
})




let seeMyResume = document.querySelector("#see-my-resume");
let resumeContainer = document.querySelector("#resume-container");

seeMyResume.addEventListener("click", () => {
    resumeContainer.show();
    dialogBg.classList.add("dialog-bg-visible");

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
        dialogBg.classList.remove("dialog-bg-visible");
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
        dialogBg.classList.add("dialog-bg-visible");
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
            dialogBg.classList.remove("dialog-bg-visible");
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




// let paths = document.querySelectorAll("svg path");
// paths.forEach((path, index) => {
//     path.style.strokeDasharray = path.getTotalLength();
//     path.style.strokeDashoffset = path.getTotalLength();
//     path.style.animation = `line-anim 2s ease forwards ${index / 4}s`;
// });



let gdsc = document.querySelector("#gdsc");
let gfg = document.querySelector("#gfg");
let techfest = document.querySelector("#techfest");
let scrollValue;

function screenSizeChange() {
    if (window.innerWidth < 975) {
        gdsc.textContent = "GDSC - GGV";
        gfg.textContent = "GFG - GGV";
        techfest.textContent = "Techfest - GGV";
        scrollValue = 25;
    } else {
        gdsc.textContent = "Google Developer Student Clubs - GGV";
        gfg.textContent = "GFG Student Chapter - GGV";
        techfest.textContent = "Equilibrio-Techfest - GGV";
        scrollValue = 100;
    }
}

screenSizeChange();

window.addEventListener('resize', screenSizeChange);


console.log("scrollValue = ", scrollValue);
let experienceSlider = document.querySelector('#experience-slider');
let rightScroll = document.querySelector('#right-scroll');
let leftScroll = document.querySelector('#left-scroll');
let scrollableDistance = experienceSlider.scrollWidth - experienceSlider.clientWidth;
let scrollTo = (scrollableDistance * scrollValue) / 100;

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
let activeSlideIndex = 0;
let companyNames = Array.from(document.querySelectorAll(".company-name"));
let companyJobTypes = Array.from(document.querySelectorAll(".company-jobtype"));
let companyJobDetails = Array.from(document.querySelectorAll(".company-jobdetails"));

companyImgs[0].classList.add("experience-slide-on-click");
companyNames[0].style.transform = "translate(-50%, 100%)";
companyJobTypes[0].style.transform = "translate(-50%, 100%)";
companyJobDetails[0].style.transform = "translate(-50%, 100%)";

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
        [companyNames, companyJobTypes, companyJobDetails].forEach(elemList => {
            elemList[activeSlideIndex].classList.remove("current-experience-description-on-click");
            elemList[activeSlideIndex].classList.add("previous-experience-description-on-click");
        });
        companyImg.classList.add("experience-slide-on-click");
        [companyNames, companyJobTypes, companyJobDetails].forEach(elemList => {
            elemList[index].classList.remove("previous-experience-description-on-click");
            elemList[index].classList.add("current-experience-description-on-click");
        });
        activeSlideIndex = index;
    });
});



let laptopWrapper = document.querySelector(".laptop-wrapper");
let laptopIcons = Array.from(document.querySelectorAll(".laptop-icons"));
let projectScreens = Array.from(document.querySelectorAll(".project-screen"));
let count = 0;

laptopIcons.forEach((laptopIcon, index) => {
    const length = projectScreens.length;
    for (let i = 0; i < length; i++) {
        projectScreens[i].style.zIndex = 0;
    }

    laptopIcon.addEventListener("mouseenter", () => {
        laptopIcon.style.transform = "scale(1.1)";
        let div = document.createElement("div");
        div.classList.add("minimized");
        div.style.background = `gray url("images/p${index}.webp") no-repeat center center/contain`;
        laptopIcon.appendChild(div);
    });


    laptopIcon.addEventListener("mouseleave", () => {
        laptopIcon.style.transform = "scale(1)";
        let divToRemove = laptopIcon.querySelector(".minimized"); // Selecting the added <div> using the class
        if (divToRemove) {
            laptopIcon.removeChild(divToRemove);
        }
    });


    laptopIcon.addEventListener("click", () => {
        if (laptopIcon.lastChild) {
            laptopIcon.removeChild(laptopIcon.lastChild);
        }
        count++;
        if (parseInt(projectScreens[index].style.zIndex) == 4) {
            projectScreens[index].classList.toggle("icon-after-click");

            for (let i = 0; i < length; i++) {
                if (parseInt(projectScreens[index].style.zIndex) > parseInt(projectScreens[i].style.zIndex)) {
                    projectScreens[i].style.zIndex = parseInt(projectScreens[i].style.zIndex) + 1;
                }
            }
            setTimeout(() => { projectScreens[index].style.zIndex = 0; }, 500);
        }
        else {
            projectScreens[index].classList.add("icon-after-click");

            for (let i = 0; i < length; i++) {
                if (parseInt(projectScreens[index].style.zIndex) < parseInt(projectScreens[i].style.zIndex)) {
                    projectScreens[i].style.zIndex = parseInt(projectScreens[i].style.zIndex) - 1;
                }
            }
            projectScreens[index].style.zIndex = 4;
        }

        setTimeout(() => {
            console.table([{
                Count: count,
                Index: index,
                z0: projectScreens[0].style.zIndex,
                z1: projectScreens[1].style.zIndex,
                z2: projectScreens[2].style.zIndex,
                z3: projectScreens[3].style.zIndex,
            }]);
        }, 500);

    });
});




let reloads = Array.from(document.querySelectorAll(".reload"));
let closes = Array.from(document.querySelectorAll(".close"));
let iframes = Array.from(document.querySelectorAll(".laptop-iframe"));

reloads.forEach((reload, index) => {
    reload.addEventListener("click", () => {
        iframes[index].src = iframes[index].src;
    });
});

closes.forEach((close, index) => {
    close.addEventListener("click", () => {
        projectScreens[index].classList.remove("icon-after-click");

        for (let i = 0; i < length; i++) {
            if (parseInt(projectScreens[index].style.zIndex) > parseInt(projectScreens[i].style.zIndex)) {
                projectScreens[i].style.zIndex = parseInt(projectScreens[i].style.zIndex) + 1;
            }
        }
        setTimeout(() => { projectScreens[index].style.zIndex = 0; }, 500);
    });
});






const myHeaders = new Headers();
myHeaders.append("Cookie", "_octo=GH1.1.1182767592.1708736063; logged_in=no");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

fetch("https://api.github.com/users/mondalsurojit", requestOptions)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const { public_repos, followers } = data;

        document.getElementById("github-repos").innerText = public_repos;
        document.getElementById("github-followers").innerText = followers;
    })
    .catch((error) => console.error(error));

fetch("https://github-contributions-api.deno.dev/mondalsurojit.json", requestOptions)
    .then((response) => response.json())
    .then((data) => {
        const contributions = data.totalContributions;
        document.getElementById("github-commits").innerText = contributions;
    })
    .catch((error) => console.error(error));

let nameWrapper = document.querySelector("#name-wrapper");
let emailWrapper = document.querySelector("#email-wrapper");
let msgWrapper = document.querySelector("#msg-wrapper");

let nameField = document.querySelector(`input[name="name"]`);
let emailField = document.querySelector(`input[name="email"]`);
let msgField = document.querySelector("#msg-field");

let nameLabel = document.querySelector(`label[for="name"]`);
let emailLabel = document.querySelector(`label[for="email"]`);
let msgLabel = document.querySelector(`label[for="msg"]`);

let submitButton = document.querySelector("#submit-button");
let form = document.querySelector("form");

function handleFocusBlur(wrapper, field, label) {
    field.addEventListener("focus", () => {
        if (field.value.trim() === "") {
            label.classList.add("label-focus", "label-focus-color");
        }
        else {
            label.classList.add("label-focus-color");
        }
        wrapper.style.outline = "2px solid var(--blue4)";
    });

    field.addEventListener("blur", () => {
        if (field.value.trim() === "") {
            label.classList.remove("label-focus", "label-focus-color");
        }
        else {
            label.classList.remove("label-focus-color");
        }
        wrapper.style.outline = "1px solid var(--shade-t)";
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    let emailTemplate = `<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
                            <p><span style="font-weight: bold;">Name:</span> ${nameField.value}</p>
                            <p><span style="font-weight: bold;">Email:</span> ${emailField.value}</p>
                            <p><span style="font-weight: bold;">Message:</span> ${msgField.value}</p>
                        </div>`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "surogobindo@gmail.com",
        Password: "3EE3D483F6A5483F3C9FA5B5D08BE4FAC33E",
        To: 'surojitmondalit@gmail.com',
        From: "surogobindo@gmail.com",
        Subject: "Sent from my portfolio website!",
        Body: emailTemplate
    }).then(
        message => {
            form.reset();
            alert("Thanks for your message! I will reach you soon!");
        }
    );
}

handleFocusBlur(nameWrapper, nameField, nameLabel);
handleFocusBlur(emailWrapper, emailField, emailLabel);
handleFocusBlur(msgWrapper, msgField, msgLabel);

form.addEventListener("submit", handleFormSubmit);
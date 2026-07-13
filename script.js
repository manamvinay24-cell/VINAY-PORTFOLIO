// ===============================
// VIDEO CONTROL
// ===============================

const video = document.getElementById("introVideo");
const soundBtn = document.querySelector(".sound-btn");


function toggleSound(){

    if(video.muted){

        video.muted = false;

        soundBtn.innerHTML = "🔊";

    }
    else{

        video.muted = true;

        soundBtn.innerHTML = "🔇";

    }

}

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================


window.addEventListener("scroll",()=>{


    const navbar =
    document.querySelector(".navbar");



    if(window.scrollY > 50){


        navbar.style.background =
        "rgba(0,0,0,0.9)";


    }


    else{


        navbar.style.background =
        "rgba(0,0,0,0.55)";


    }



});
// ===============================
// SCROLL REVEAL
// ===============================


const revealElements =
document.querySelectorAll(
"section, .project-card, .about-card, .skill-box, .contact-card"
);



window.addEventListener("scroll",()=>{


    revealElements.forEach((element)=>{


        const position =
        element.getBoundingClientRect().top;



        const screen =
        window.innerHeight - 100;



        if(position < screen){


            element.style.opacity="1";


            element.style.transform=
            "translateY(0)";


        }


    });


});
// ===============================
// PAGE LOAD
// ===============================


window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});





// ===============================
// ACTIVE NAV LINK
// ===============================


const navLinks =
document.querySelectorAll(".nav-links a");



navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.forEach(item=>{


            item.style.color="white";


        });



        link.style.color="#00f5ff";


    });


});
function toggleSound(){

    const video = document.getElementById("introVideo");

    const button = document.querySelector(".sound-btn");


    if(video.muted){

        video.muted = false;
        video.volume = 1;

        button.innerHTML = "🔊";

    }
    else{

        video.muted = true;

        button.innerHTML = "🔇";

    }

}

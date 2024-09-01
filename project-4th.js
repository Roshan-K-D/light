
// animation with gsap

// nev-bar
let tl =gsap.timeline();
 
tl.from(".nev-bar .logo",{ 
    opacity:0,
    y:-100,
    duraction:.115,
    delay:.1,
})

tl.from(".option",{
    opacity:0,
    y:-10,
    duraction:.1,
})

tl.from(".option a",{
    opacity:0,
    y:-20,
    duraction:.1,
    stagger:.12,
})

tl.from(".login",{
    opacity:0,
    y:-10,
    duraction:.12,
})

tl.from(".nev-bar .signup",{
    opacity:0,
    y:-10,
    duraction:.1,
})

// hero



tl.from(".hero .hero-img",{
    opacity:0,
    x:50,
    duraction:.1,
})

tl.from(".hero h1",{
    opacity:0,
    x:50,
    duraction:.1,
})

tl.from(".hero p",{
    opacity:0,
    x:50,
    duraction:.1,
})


// gsap.from(".quote",{
//     opacity:0,
//     y:-10,
//     duraction:.5,
//     scrollTrigger:{
//         trigger:".quote",
//         scoller:"body",
//         // markers:true,
//         start:"top 20%",
//         end:"top 20%",
//         scrub:1,
//     }
// })

tl.from(".hero button",{
    opacity:0,
    x:50,
    duraction:.1,
})



// page1



tl.to(".upper-page1",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:".upper-page1 ",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:1,
        pin:true
    }
})

var ti = gsap.timeline()

gsap.from(".role-page h2",{
    opacity:0,
    y:-20,
    duraction:1,
    scrollTrigger:{
        trigger:".role-page",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
    }
})

ti.from(".roles div",{
    opacity:0,
    y:-50,
    duraction:1,
    stagger:.3,
    scrollTrigger:{
        trigger:".role-page",
        scoller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2, 
    }
})


// feachers 


ti.from(".left-side-feacher .side-feachers",{
    opacity:0,
    y:-10,
    duraction:.2,
    stagger:.3,
    scrollTrigger:{
        trigger:".side-feachers",
        scoller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1, 
    }
})


ti.from(".right-side-feacher",{
    opacity:0,
    x:100,
    duraction:.2,
    stagger:.3,
    delay:.5,
    scrollTrigger:{
        trigger:".right-side-feacher",
        scoller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:1, 
    }
})
// page 2

gsap.to(".page2",{
    
    scrollTrigger:{
        trigger:".page2",
        scroll:"body",
        pin:true,
    }
})

// page 1 effect 

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

let feacher_timeline = [one, two, three, four];

let index = 0;

function animate() {
  feacher_timeline[index].classList.add("auto_change");
  setTimeout(() => {
    feacher_timeline[index].classList.remove("auto_change");
    index = (index + 1) % feacher_timeline.length;
    animate();
  }, 2000);
}

animate();


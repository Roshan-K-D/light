
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


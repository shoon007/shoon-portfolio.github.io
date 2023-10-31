ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh",
        scale: 4,
        yPercent: 220,
    }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top top",
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: false,
});
$(".header-text").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "-100% top",
            end: "30% top",
            scrub: 0.8,
        },
    });
    tl.to(targetElement, {
        y: "100%",
        duration: 1,
    });
});

// sticky img container
$(".circle-div ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".circle-img");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",

            /*   end: "bottom bottom", */
            pin: true,
            end: "+=1000",

            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            width: "25em",
            height: "25em",
            borderRadius: "25em",
            duration: 1,
        }, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0em",
            duration: 1,
        }
    );
});

// Dark to light
$(".circle-div, .gallery:nth-child(even) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".circle-div,.gallery-container,.info,.nav,.nav a");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            duration: 1,
        }, {
            color: "#2e2a27",
            backgroundColor: "#e8e2da",

            duration: 1,
        }
    );
});
// Dark to light for gallery
$(".circle-div,.gallery:nth-child(even) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".gallery-container,.info,.nav");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            duration: 1,
            /*   borderBottom: "1px solid #e8e2da", */
        }, {
            color: "#2e2a27",
            backgroundColor: "#e8e2da",
            /*           borderBottom: "1px solid black", */
            duration: 1,
        }
    );
});
// Dark to light for navbar
$(".circle-div,.gallery:nth-child(even) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".nav");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            color: "#e8e2da",
            duration: 1,
            borderBottom: "1px solid #e8e2da",
        }, {
            color: "#2e2a27",

            borderBottom: "1px solid black",
            duration: 1,
        }
    );
});
// Dark to light for logo
$(".circle-div,.gallery:nth-child(even) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".logo");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            color: "#e8e2da",
            duration: 1,
        }, {
            color: "#2e2a27",

            duration: 1,
        }
    );
});

// light to dark for gallery
$(" .gallery:nth-child(odd) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $("body,.gallery-container,.info,.nav,.nav a");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            backgroundColor: "#e8e2da",
            color: "#2e2a27",
            duration: 1,
        }, {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            duration: 1,
        }
    );
});

// light to dark for navbar
$(" .gallery:nth-child(odd) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".nav");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            color: "#2e2a27",
            duration: 1,
            borderBottom: "1px solid #000",
        }, {
            color: "#e8e2da",
            duration: 1,
            borderBottom: "1px solid #e8e2da",
        }
    );
});

// light to dark for logo
$(" .gallery:nth-child(odd) ").each(function(index) {
    let triggerElement = $(this);
    let targetElement = $(".logo");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });
    tl.fromTo(
        targetElement, {
            color: "#2e2a27",
            duration: 1,
        }, {
            color: "#e8e2da",
            duration: 1,
        }
    );
});

// Grid Title Change
$(".info").eq(0).addClass("is--active");
// Run a function
$(".gallery").each(function(index) {
    let triggerElement = $(this);
    let myIndex = $(this).index();
    let targetElement = $(".info").eq(myIndex);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom bottom",
            onEnter: () => {
                $(".info").removeClass("is--active");
                targetElement.addClass("is--active");
            },
            onEnterBack: () => {
                $(".info").removeClass("is--active");
                targetElement.addClass("is--active");
            },
        },
    });
});